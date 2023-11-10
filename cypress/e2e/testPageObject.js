const { formAccordionPage } = require("../support/page_object/accordionPage.js")
const { onDatePickerPage } = require("../support/page_object/datepickerPage")
const { formLayoutPage } = require("../support/page_object/layoutPage")
const { navigationPage } = require("../support/page_object/navigationPage")
const { onSmartTable } = require("../support/page_object/smartTablePage")
const { formStepperPage } = require("../support/page_object/stepperPage.js")

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

    it.only('test formLayoutPage', () => {
        // navigationPage.formLayoutsPage()
        // formLayoutPage.submitInlineFormWithNameAndEmail('Rostik', 'test@test.com')

        // navigationPage.formLayoutsPage()
        // formLayoutPage.submitBasicFormWithNameAndEmail('test@test.com', '12345')

        // navigationPage.formDataPickerPage()
        // onDatePickerPage.selectCommonDatepickerDateFromToday(200)

        // navigationPage.formDataPickerPage()
        // onDatePickerPage.selectDatePickerRangeFromToday(10, 20)

        // navigationPage.formSmartTablePage()
        // onSmartTable.addNewRecordWithFirstAndLastName('Rostyslav', 'Krotenko', 30)

        // onSmartTable.modifingEmailCellByName('Larry', 'rostik.krotenko@gmail.com')
        // onSmartTable.deleteRowByIndex(3)

        // navigationPage.formSteppertPage()
        // formStepperPage.submitTopStepper(6)
        navigationPage.formAccordionPage()
        formAccordionPage.clickTogleFirstItem()
    })
})