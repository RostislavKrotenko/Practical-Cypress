/// <reference types="cypress" />

import { navigationPage } from "../support/page_object/navigationPage"
import { formStepperPage } from "../support/page_object/stepperPage"

describe('Test Stepper Page', () => {
    
    beforeEach('Open Stepper Page', () => {
        cy.openHomePage()
        navigationPage.formSteppertPage()
    })

    it('Test all steppers on the page', () => {
        formStepperPage.clickTopStepperNextButton(3)
        formStepperPage.clickTopStepperPreviousButton(3)
        formStepperPage.clickRightBottomStepperNextButton(3)
        formStepperPage.clickRightBottomStepperPreviousButton(3)
    })
})