export class FormLayoutPage {

    submitInlineFormWithNameAndEmail(userName, userEmail) {

        cy.contains('nb-card', 'Inline form').find('form').then( form => {
            cy.wrap(form).find('[placeholder="Jane Doe"]').type(userName)
            cy.wrap(form).find('[placeholder="Email"]').type(userEmail)
            cy.wrap(form).find('[type="checkbox"]').check({force: true})
            cy.wrap(form).submit()
        })
    }

    submitBasicFormWithNameAndEmail(userEmail, userPassword) {

        cy.contains('nb-card', 'Basic form').find('form').then( form => {
            cy.wrap(form).find('[placeholder="Email"]').type(userEmail)
            cy.wrap(form).find('[placeholder="Password"]').type(userPassword)
            cy.wrap(form).find('[type="checkbox"]').check({force: true})
            cy.wrap(form).submit()
        })
    }

    submitUsingTheGridFormWithEmailAndPassword(userEmail, userPassword, radioButton='Option 1') {
        cy.contains('nb-card', 'Using the Grid').find('form').then( form => {
            cy.wrap(form).find('[placeholder="Email"]').type(userEmail)
            cy.wrap(form).find('[placeholder="Password"]').type(userPassword)
            cy.wrap(form).contains('nb-radio', radioButton).find('input').click({force: true})
            cy.wrap(form).submit()
        })
    }

    submitFormWithoutLabels(recipients, subject, message) {
        cy.contains('nb-card', 'Form without labels').find('form').then( form => {
            cy.wrap(form).find('[placeholder="Recipients"]').type(recipients)
            cy.wrap(form).find('[placeholder="Subject"]').type(subject)
            cy.wrap(form).find('[placeholder="Message"]').type(message)
            cy.wrap(form).submit()
        })
    }

    submitBlockForm(firstName, lastName, email, website) {
        cy.contains('nb-card', 'Block form').then( form => {
            cy.wrap(form).find('[placeholder="First Name"]').type(firstName)
            cy.wrap(form).find('[placeholder="Last Name"]').type(lastName)
            cy.wrap(form).find('[placeholder="Email"]').type(email)
            cy.wrap(form).find('[placeholder="Website"]').type(website)
            cy.wrap(form).find('button').click()
        })
    }

    submitHorizontalForm(email, password, rememberMe=false) {
        cy.contains('nb-card', 'Horizontal form').find('form').then( form => { 
            cy.wrap(form).find('[placeholder="Email"]').type(email)
            cy.wrap(form).find('[placeholder="Password"]').type(password)
            if (rememberMe) {
                cy.wrap(form).find('[type="checkbox"]').check({force: true})
            }
            cy.wrap(form).submit()
        })
    }

}

export const formLayoutPage = new FormLayoutPage()