/// <reference types="cypress" />

const { onDatePickerPage } = require("../support/page_object/datepickerPage")
const { navigationPage } = require("../support/page_object/navigationPage")

describe( 'Test Datepicker', () => {

    beforeEach('Open application', () => {
        cy.openHomePage()
        navigationPage.formDataPickerPage()
    })

    it('Select date in Common Datepicker', () => {
        onDatePickerPage.selectCommonDatepickerDateFromToday(200)
    })
})