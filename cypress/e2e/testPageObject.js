const { formAccordionPage } = require("../support/page_object/accordionPage.js")
const { onDatePickerPage } = require("../support/page_object/datepickerPage")
const { formDialogPage } = require("../support/page_object/dialogPage.js")
const { formLayoutPage } = require("../support/page_object/layoutPage")
const { navigationPage } = require("../support/page_object/navigationPage")
const { formPopoverPage } = require("../support/page_object/popoverPage.js")
const { onSmartTable } = require("../support/page_object/smartTablePage")
const { formStepperPage } = require("../support/page_object/stepperPage.js")
const { formToastrPage } = require("../support/page_object/toastrPage.js")

describe('Test with Page Object', () => {

    beforeEach('open application', () => {
        cy.openHomePage()
    })

    it('verify navigation across list', () => {
        navigationPage.formLayoutsPage()
        navigationPage.formDataPickerPage()
        navigationPage.formSmartTablePage()
        navigationPage.formExtraComponentsPage()
    })

    it.only('test formToastrPage', () => {

        navigationPage.formToastrPage()
        formToastrPage.fillAllToastrPage('top-left', 'english', 'g', '2000', 'info', true, true, true)
    })
})