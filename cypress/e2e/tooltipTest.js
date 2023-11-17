/// <reference types="cypress" />

import { navigationPage } from "../support/page_object/navigationPage"
import { formTooltipPage } from "../support/page_object/tooltipPage"

describe('Test Tooltip Page', () => {

    beforeEach('Open Tooltip Page', () => {
        cy.openHomePage()
        navigationPage.formTooltipPage()
    })

    it('Test Colored Tooltips buttons', () => {
        formTooltipPage.clickOnTooltipsByContainerAndButtonName()
        formTooltipPage.clickOnTooltipsByContainerAndButtonName('Primary')
        formTooltipPage.clickOnTooltipsByContainerAndButtonName('Success')
        formTooltipPage.clickOnTooltipsByContainerAndButtonName('Danger')
        formTooltipPage.clickOnTooltipsByContainerAndButtonName('Info')
        formTooltipPage.clickOnTooltipsByContainerAndButtonName('Warning')
    })
})