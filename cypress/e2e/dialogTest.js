/// <reference types="cypress" />

import { formDialogPage } from "../support/page_object/dialogPage"
import { navigationPage } from "../support/page_object/navigationPage"

describe('Test dialog page', () => {

    beforeEach('Open Application', () => {
        cy.openHomePage()
        navigationPage.formDialogPage()
    })

    it('Check dialog windows and button', () => {
        formDialogPage.openDialogWithComponent()
        formDialogPage.dismissDialog()

        formDialogPage.openDialogWithTemplate()
        formDialogPage.closeDialog()

        formDialogPage.enterNameInReturnResultFromDialog('Andrew')
    })
})