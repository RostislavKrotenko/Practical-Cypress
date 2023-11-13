export class LoginForm {

    verifyLoginTitleAndSubtitle() {
        cy.get('.title').should('contain', 'Login')
        cy.get('.sub-title').should('contain', 'Hello! Log in with your email.')
    }

    fillFormByCorrectData(email, password, rememberMe=false) {
        cy.get('form').then(form => {
            cy.wrap(form).find('[placeholder="Email address"]').then( emailField => {
                cy.wrap(emailField).type(email)
                cy.wrap(emailField).should('have.value', email)
            })
            cy.wrap(form).find('[placeholder="Password"]').then ( passwordField => {
                cy.wrap(passwordField).type(password)
                cy.wrap(passwordField).should('have.value', password)
            })

            if (rememberMe) {
                cy.get('.custom-checkbox').check()
            }

            cy.wrap(form).submit()
        })
    }
    
    fillFormByIncorrectData(email, password, remembeMe=false) {
        cy.get('form').then(form => {
            cy.wrap(form).find('[placeholder="Email address"]').then( emailField => {
                cy.wrap(emailField).type(email)
                cy.wrap(emailField).find('[class="caption status-danger"]').should('have.value', email)
            })
            cy.wrap(form).find('[placeholder="Password"]').then ( passwordField => {
                cy.wrap(passwordField).type(password)
                cy.wrap(passwordField).should('have.value', password)
            })

            if (rememberMe) {
                cy.get('.custom-checkbox').check()
            }

            cy.wrap(form).submit()
        })
    }

    clickOnRegisterButton() {
        cy.get('[aria-label="Register"] a').click()
    }

    clickOnGithubLogIn() {
        cy.get('.github').click()
    }

    clickOnFacebookLogIn() {
        cy.get('.facebook').click()
    }

    clickOnTwitterLogIn() {
        cy.get('.eva-twitter').click()
    }

    clickOnForgotPassword(email) {
        cy.get('.forgot-password').click()
        cy.get('form').then( form => {
            cy.wrap(form).find('input').then( input => {
                cy.wrap(input).type(email)
                cy.wrap(input).invoke('prop', 'value').should('contain', email)
            })
            cy.wrap(form).submit()
        })
    }

    clickOnForgotPasswordAndBackToLogin() {
        cy.get('.forgot-password').click()
        cy.contains('a', 'Back to Log In').click()
    }

    clickOnForgotPasswordAndRegister() {
        cy.get('.forgot-password').click()
        cy.contains('a', 'Register').click()
    }
}

export const loginForm = new LoginForm()