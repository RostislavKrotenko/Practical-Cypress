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
                cy.get('[type="checkbox"]').check({force: true})
            }

            cy.wrap(form).submit()
        })
    }
    
    fillFormByIncorrectEmailAndPassword(email, password, rememberMe=false) {
        cy.get('form').then(form => {
            cy.wrap(form).find('[placeholder="Email address"]').then( emailField => {
                cy.wrap(emailField).type(email)
                cy.wrap(emailField).should('have.class', 'status-danger')
            })
            cy.wrap(form).find('[placeholder="Password"]').then ( passwordField => {
                cy.wrap(passwordField).type(password)
                cy.wrap(passwordField).should('have.class', 'status-danger')
            })

            if (rememberMe) {
                cy.get('[type="checkbox"]').check({force: true})
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