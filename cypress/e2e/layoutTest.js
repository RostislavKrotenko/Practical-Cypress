/// <reference types="cypress" />

import { formLayoutPage } from "../support/page_object/layoutPage"
import { navigationPage } from "../support/page_object/navigationPage"

describe('Test Layout Page', () => {

    beforeEach('Open Layout Test', () => {
        cy.openHomePage()
        navigationPage.formLayoutsPage()
    })

    it('Test Inline and Basic Forms', () => {
        formLayoutPage.submitInlineFormWithNameAndEmail('Kelin', 'test@test.com')
        formLayoutPage.submitBasicFormWithNameAndEmail('rost.krot@gmail.com', '12345')
    })
})