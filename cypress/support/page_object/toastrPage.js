export class FormToastrPage {

    selectPosition(position) {
        cy.get('nb-card').find('.position-select').then( selectList => {
            cy.wrap(selectList).click()
            cy.get('.options-list').find(`[ng-reflect-value="${position}"]`).click()
            cy.wrap(selectList).should('contain', position)
        })
        
    }
    writeTitle(title) {
        cy.get('nb-card').find('[name="title"]').then( input => {
            cy.wrap(input).clear().type(title)
            cy.wrap(input).invoke('prop', 'value').should('contain', title)
        })
    }
    writeContent(content) {
        cy.get('nb-card').find('[name="content"]').then( input => {
            cy.wrap(input).clear().type(content)
            cy.wrap(input).invoke('prop', 'value').should('contain', content)
        })
    }
    writeTimeToHideToast(timeout) {
        cy.get('nb-card').find('[name="timeout"]').then( input => {
            cy.wrap(input).clear().type(timeout)
            cy.wrap(input).invoke('prop', 'value').should('contain', timeout)
        })
    }
    selectToastType(type) {
        cy.get('nb-card').find('.select-button').eq(1).then ( selectList => {
            cy.wrap(selectList).click()
            cy.get('.options-list').find(`[ng-reflect-value="${type}"]`).click()
            cy.wrap(selectList).should('contain', type)
        })
    }
    selectCheckBoxes(hideOnClick=false, preventArisingOfDuplicate=false, showToastWithIcon=false) {
        if (hideOnClick) {
            cy.get('nb-checkbox').find('[type="checkbox"]').eq(0).then( checkBox => {
                cy.wrap(checkBox).check({force: true})
                cy.wrap(checkBox).should('be.checked')
            })
        }
        if(preventArisingOfDuplicate) {
            cy.get('nb-checkbox').find('[type="checkbox"]').eq(1).then( checkBox => {
                cy.wrap(checkBox).check({force: true})
                cy.wrap(checkBox).should('be.checked')
            })
        }
        if (showToastWithIcon) {
            cy.get('nb-checkbox').find('[type="checkbox"]').eq(0).then( checkBox => {
                cy.wrap(checkBox).check({force: true})
                cy.wrap(checkBox).should('be.checked')
            })
        }
    }

    submitShowToast() {
        cy.get('nb-card-footer').contains('button', 'Show toast').click()
        cy.get('nb-toast').should('have.class', 'ng-trigger-fadeIn')
    }

    fillAllToastrPage(position='top-right', title='title', content='content', timeout='2000', type='primary', hideOnClick=false, preventArisingOfDuplicate=false, showToastWithIcon=false) {
        this.selectPosition(position)
        this.writeTitle(title)
        this.writeContent(content)
        this.writeTimeToHideToast(timeout)
        this.selectToastType(type)
        this.selectCheckBoxes(hideOnClick, preventArisingOfDuplicate, showToastWithIcon)
        this.submitShowToast()
    }
}

export const formToastrPage = new FormToastrPage()