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

}

export const formLayoutPage = new FormLayoutPage()