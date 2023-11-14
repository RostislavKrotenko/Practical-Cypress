export class RequestPasswordForm {

    verifyTitleAndSubtitle() {
        const subtitle = 'Enter your email address and we’ll send a link to reset your password'
        cy.get('.title').should('contain', 'Forgot Password')
        cy.get('.sub-title').should('contain', subtitle)
    }

    requestPasswordReset(email) {
        cy.get('form').then( form => {
            cy.wrap(form).find('input').then( inputEmail => {
                cy.wrap(inputEmail).type(email)
                cy.wrap(inputEmail).invoke('prop', 'value').should('contain', email)
            })
            cy.wrap(form).submit()
        })
    }

    backToLogin() {
        cy.contains('a', 'Back to Log In').click()
    }

    goToRegister() {
        cy.contains('a', 'Register').click()
    }
}

export const requestPaswword = new RequestPasswordForm()