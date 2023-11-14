const { formAccordionPage } = require("../support/page_object/accordionPage.js")
const { onDatePickerPage } = require("../support/page_object/datepickerPage")
const { formDialogPage } = require("../support/page_object/dialogPage.js")
const { formLayoutPage } = require("../support/page_object/layoutPage")
const { loginForm } = require("../support/page_object/loginPage.js")
const { navigationPage } = require("../support/page_object/navigationPage")
const { formPopoverPage } = require("../support/page_object/popoverPage.js")
const { registerForm } = require("../support/page_object/registerPage.js")
const { requestPaswword } = require("../support/page_object/requestPassword.js")
const { resetPassswordForm } = require("../support/page_object/resetPasswordPage.js")
const { onSmartTable } = require("../support/page_object/smartTablePage")
const { formStepperPage } = require("../support/page_object/stepperPage.js")
const { formToastrPage } = require("../support/page_object/toastrPage.js")
const { formTooltipPage } = require("../support/page_object/tooltipPage.js")
const { formTreeGrid } = require("../support/page_object/treeGridPage.js")

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

        navigationPage.formSteppertPage()
        formStepperPage.clickTopStepper(2)
    })
})