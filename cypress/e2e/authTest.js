/// <reference types="cypress" />

import { loginForm } from "../support/page_object/loginPage"
import { navigationPage } from "../support/page_object/navigationPage"
import { registerForm } from "../support/page_object/registerPage"
import { requestPaswword } from "../support/page_object/requestPassword"

describe('Test Authorization', () => {

    beforeEach('Open Home Page', () => {
        cy.openHomePage()
    })

    it('Test Registration and Logging Form', () => {

        navigationPage.formRegisterPage()
        registerForm.fillRegisterFormByCorrectData('Rostik', 'test@test.com', 'banana234')
        navigationPage.formLoginPage()
        loginForm.clickOnForgotPassword()
        requestPaswword.requestPasswordReset('test@test.com')
        navigationPage.formLoginPage()
        loginForm.fillFormByCorrectData('test@test.com', 'banana2345', true)
    })
})