/// <reference types="cypress" />

import { navigationPage } from "../support/page_object/navigationPage"
import { formPopoverPage } from "../support/page_object/popoverPage"

describe('Test popover page', () => {

    beforeEach('Open Popover Page', () => {
        cy.openHomePage()
        navigationPage.formPopoverPage()
    })

    it('Test Template Popovers', () => {
        formPopoverPage.clickWithTabsTemplatePopovers(false, true)
        formPopoverPage.clickWithFormbTemplatePopovers('Rostik', 'Bug', 'Bug on the prod')
        formPopoverPage.clickWithCardTemplatePopovers()
    })
})