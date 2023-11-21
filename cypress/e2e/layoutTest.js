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

    it('Test Using the Grid, Form without labels, Block, Horizontal Forms', () => {
        formLayoutPage.submitUsingTheGridFormWithEmailAndPassword('r_krot@gmail.com', 'IloveMole', 'Option 2')
        formLayoutPage.submitFormWithoutLabels('J. Bodra', 'Access related issue', 'Don`t have access to necessary applications')
        formLayoutPage.submitBlockForm('Rostyslav', 'Krotenko', 'rost@gmail.com', 'https://softserve.udemy.com/course/cypress-web-automation-testing-from-zero-to-hero')
        formLayoutPage.submitHorizontalForm(' var_cina@yahoo.com', '34Yt*&!jio', true)
    })
})