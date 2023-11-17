/// <reference types="cypress" />

import { navigationPage } from "../support/page_object/navigationPage"
import { formToastrPage } from "../support/page_object/toastrPage"

describe('Test Toastr Page', () => {

    beforeEach('Open Toastr Page', () => {
        cy.openHomePage()
        navigationPage.formToastrPage()
    })

    it('Test toaster configuration', () => {
        formToastrPage.selectPosition('top-end')
        formToastrPage.writeTitle('SayMyName')
        formToastrPage.writeContent('You are right')
        formToastrPage.writeTimeToHideToast("1500")
        formToastrPage.selectToastType('info')
        formToastrPage.uncheckCheckBoxes(true, false, true)
        formToastrPage.checkCheckBoxes(false, true, false)
        formToastrPage.submitShowToast()
    })
})