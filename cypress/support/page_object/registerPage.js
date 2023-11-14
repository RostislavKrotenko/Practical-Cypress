import { createYield } from "typescript"

export class RegisterForm {

    verifyRegisterTitle() {
        cy.get('.title').should('contain', 'Register')
    }

    fillRegisterFormByCorrectData(fullName, email, password) {
        cy.get('form').then( form => {
            cy.wrap(form).find('[placeholder="Full name"]').then( inputName => {
                cy.wrap(inputName).type(fullName)
                cy.wrap(inputName).invoke('prop', 'value').should('contain', fullName)
            })
            cy.wrap(form).find('[placeholder="Email address"]').then(inputEmail => {
                cy.wrap(inputEmail).type(email)
                cy.wrap(inputEmail).invoke('prop', 'value').should('contain', email)
            })
            cy.wrap(form).find('[placeholder="Password"]').then(inputPassword => {
                cy.wrap(inputPassword).type(password)
                cy.wrap(inputPassword).invoke('prop', 'value').should('contain', password)
            })
            cy.wrap(form).find('[placeholder="Confirm Password"]').then( inputConfirmPassword => {
                cy.wrap(inputConfirmPassword).type(password)
                cy.wrap(inputConfirmPassword).invoke('prop', 'value').should('contain', password)
            })
            cy.wrap(form).find('[type="checkbox"]').check({force: true})
            cy.wrap(form).submit()
        })
    }

    fillRegisterFormByIncorrectData(fullName, email, password) {
        cy.get('form').then( form => {
            cy.wrap(form).find('[placeholder="Full name"]').then( inputName => {
                cy.wrap(inputName).type(fullName)
                cy.wrap(inputName).should('have.class', 'status-danger')
            })
            cy.wrap(form).find('[placeholder="Email address"]').then(inputEmail => {
                cy.wrap(inputEmail).type(email)
                cy.wrap(inputEmail).should('have.class', 'status-danger')
            })
            cy.wrap(form).find('[placeholder="Password"]').then(inputPassword => {
                cy.wrap(inputPassword).type(password)
                cy.wrap(inputPassword).should('have.class', 'status-danger')
            })
            cy.wrap(form).find('[placeholder="Confirm Password"]').then( inputConfirmPassword => {
                cy.wrap(inputConfirmPassword).type(password)
                cy.wrap(inputConfirmPassword).invoke('prop', 'value').should('contain', password)
            })
            cy.wrap(form).find('[type="checkbox"]').check({force: true})
            cy.wrap(form).submit()
        })
    }

    clickOnGithubRegister() {
        cy.get('.github').click()
    }

    clickOnFacebookRegister() {
        cy.get('.facebook').click()
    }

    clickOnTwitterRegister() {
        cy.get('.eva-twitter').click()
    }
}

export const registerForm = new RegisterForm()