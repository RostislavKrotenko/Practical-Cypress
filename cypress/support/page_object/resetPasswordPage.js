export class FormResetPassword {

    verifyTitleSubtitle() {
        cy.get('.title').should('contain', 'Change password')
        cy.get('.sub-title').should('contain', 'Please set a new password')
    }

    fillChangePasswordByCorrectData(password) {
        cy.get('form').then( form => {
            cy.wrap(form).find('.first').then( inputNewPassword => {
                cy.wrap(inputNewPassword).type(password)
                cy.wrap(inputNewPassword).invoke('prop', 'value').should('contain', password)
            }) 
            cy.wrap(form).find('.last').then( inputConfirmPassword => {
                cy.wrap(inputConfirmPassword).type(password)
                cy.wrap(inputConfirmPassword).invoke('prop', 'value').should('contain', password)
            })
            
            cy.wrap(form).submit()
        })
    }

    fillChangePasswordByIncorrectData(password) {
        cy.get('form').then( form => {
            cy.wrap(form).find('.first').then( inputNewPassword => {
                cy.wrap(inputNewPassword).type(password)
                cy.wrap(inputNewPassword).should('have.class', 'status-danger')
            }) 
            cy.wrap(form).find('.last').then( inputConfirmPassword => {
                cy.wrap(inputConfirmPassword).type(password)
                cy.wrap(inputConfirmPassword).invoke('prop', 'value').should('contain', password)
            })
            
            cy.wrap(form).submit()
        })
    }

    clickOnBackToLogIn() {
        cy.contains('a', 'Back to Log In')
    }

    clickOnRegister() {
        cy.contains('a', 'Register')
    }
}

export const resetPassswordForm = new FormResetPassword()