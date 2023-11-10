/// <reference types="cypress" />

const { table } = require("console")

describe('First test suite', () => {

    it('first test', () => {

        cy.visit('/')
        cy.contains('Forms').click()
        cy.contains('Form Layouts').click()

        //Tag name
        cy.get('input')

        // Id
        cy.get('#inputEmail1')

        // Class value
        cy.get('.input-full-width')
        
        // Attribute name
        cy.get('[fullwidth]')

        //Atribute name and value
        cy.get('[placeholder="Email"]')

        // Class  value
        cy.get('[class="input-full-width size-medium shape-rectangle"]')

        // Two attributes
        cy.get('[placeholder="Email"][fullwidth]')

        // tag, attribute, id and class
        cy.get('input[placeholder="Email"]#inputEmail1.input-full-width')

        // Cypress test id
        cy.get('[data-cy="imputEmail1"]')
    })

    it('Second test suite', () => {
        cy.visit('/')
        cy.contains('Forms').click()
        cy.contains('Form Layouts').click()

        // get() - find elements on the page by locator globally
        // find() - find child elements by locator
        // contains() - find HTML text and by text and locator

        cy.contains('[status="warning"]', 'Sign in')
        cy.contains('nb-card', 'Horizontal form').find('button')
        cy.contains('nb-card', 'Horizontal form').contains('Sign in')

        // cypress chain
        cy.get('#inputEmail3')
        .parents('form')
        .find('button')
        .should('contain', 'Sign in')
        .parents('form')
        .find('nb-checkbox')
        .click()
    })

    it('Save subject of the command', () => {

        cy.visit('/')
        cy.contains('Forms').click()
        cy.contains('Form Layouts').click()

        cy.contains('nb-card', 'Using the Grid').find('[for="inputEmail1"]').should('contain', 'Email')
        cy.contains('nb-card', 'Using the Grid').find('[for="inputPassword2"]').should('contain', 'Password')


        // Cy alias

        cy.contains('nb-card', 'Using the Grid').as('usingGrid')
        cy.get('@usingGrid').find('[for="inputEmail1"]').should('contain', 'Email')
        cy.get('@usingGrid').find('[for="inputPassword2"]').should('contain', 'Password')

    })

    it('radio buttons and checkbox', () => {

        cy.visit('/')
        cy.contains('Forms').click()
        cy.contains('Form Layouts').click()

        cy.contains('nb-card', 'Using the Grid').find('[type="radio"]').then(radioValue => {
            cy.wrap(radioValue).eq(0).check({force: true}).should('be.checked')
            cy.wrap(radioValue).eq(1).check({force: true})
            cy.wrap(radioValue).eq(0).should('not.be.checked')
            cy.wrap(radioValue).eq(2).should('be.disabled')
        })
    })
    
    it('checkbox', () => {

        cy.visit('/')
        cy.contains('Modal & Overlays').click()
        cy.contains('Toastr').click()

        cy.get('[type="checkbox"]').check({force: true})

    })

    it('Date picker', () => {

        function selectDateFromCurrent(day) {
            let date = new Date()
            date.setDate(date.getDate() + day)
            let futureDay = date.getDate()
            let futureMonth = date.toLocaleDateString('en-US', {month: 'short'})
            let futureYear = date.getFullYear()
            let assertDate = `${futureMonth} ${futureDay}, ${futureYear}`
            
            cy.get('nb-calendar-navigation').invoke('attr', 'ng-reflect-date').then( dateAttribute => {
                if (!dateAttribute.includes(futureMonth) || !dateAttribute.includes(futureYear)) {
                    cy.get('[data-name="chevron-right"]').click()
                    selectDateFromCurrent(day)
                } else {
                    cy.get('.day-cell').not('bounding-month').contains(futureDay).click()
                }
            })
            return assertDate
        }

        cy.visit('/')
        cy.contains('Forms').click()
        cy.contains('Datepicker').click()

        cy.contains('nb-card' ,'Common Datepicker').find('input').then( input => {

            cy.wrap(input).click()
            
            const dateToAssert = selectDateFromCurrent(1000)
            cy.wrap(input).invoke('prop', 'value').should('contain', dateToAssert)
            cy.wrap(input).should('have.value', dateToAssert)

        })
    })

    it('Dropdown', () => {

        cy.visit('/')
        cy.get('nav').find('nb-select').click()
        cy.get('.options-list').contains('Dark').click()
        cy.get('nav nb-select').should('contain', 'Dark')

        cy.get('nav').find('nb-select').then( dropDown => {
            cy.get(dropDown).click()
            cy.get('.options-list nb-option').each((listItem, index) => {
                const itemText = listItem.text().trim()
                cy.wrap(listItem).click()
                cy.wrap(dropDown).should('contain', itemText)
                if (index < 3) {
                    cy.get(dropDown).click()
                }
            })
        })
    }) 
    
    it('Table', () => {
        cy.visit('/')
        cy.contains('Tables & Data').click()
        cy.contains('Smart Table').click()
        
        cy.get('tbody').contains('tr','Larry').then(tableRow => {
            cy.wrap(tableRow).find('.nb-edit').click()
            cy.wrap(tableRow).find('[placeholder="E-mail"]').clear().type('rostik.krotenko@softserveinc')
            cy.wrap(tableRow).find('.nb-checkmark').click()
            cy.wrap(tableRow).find('td').eq(5).should('contain', 'rostik.krotenko@softserveinc')
        })

        cy.get('thead').find('.nb-plus').click()
        cy.get('thead tr').eq(2).then( tableRow => {
            cy.wrap(tableRow).find('[placeholder="First Name"]').type('Rostyslav')
            cy.wrap(tableRow).find('[placeholder="Last Name"]').type('Krotenko')
            cy.wrap(tableRow).find('[placeholder="Age"]').type('23')
            cy.wrap(tableRow).find('.nb-checkmark').click()
        })

        cy.get('tbody tr').first().find('td').then( tableColumns => {
            cy.wrap(tableColumns).eq(2).should('contain', 'Rostyslav')
            cy.wrap(tableColumns).eq(3).should('contain', 'Krotenko')
        })

        const age = [20, 30, 40, 200]
        cy.wrap(age).each(itemAge => {
            cy.get('thead [placeholder="Age"]').clear().type(itemAge)
            cy.wait(500)
            cy.get('tbody tr').each( rowTable => {
                if (itemAge == 200) {
                    cy.wrap(rowTable).find('td').should('contain', 'No data found')
                } else {
                    cy.wrap(rowTable).find('td').eq(6).should('contain', itemAge)
                }
            })
        })
       
    })
    
    it('PopUp and TipUp', () => {
        cy.visit('/')
        cy.contains('Modal & Overlays').click()
        cy.contains('Tooltip').click()

        cy.contains('nb-card', 'Colored Tooltips')
            .contains('Default').click()
        cy.get('nb-tooltip').should('contain', 'This is a tooltip')
        })
    })

    it.only('Dialog window', () => {
        cy.visit('/')
        cy.contains('Tables & Data').click()
        cy.contains('Smart Table').click()


        const stub = cy.stub()
        cy.on('window:confirm', stub)
        cy.get('tbody tr').first().find('.nb-trash').click().then( () => {
            expect(stub.getCall(0)).to.be.calledWith('Are you sure you want to delete?')
    })
})

