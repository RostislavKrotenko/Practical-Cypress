/// <reference types="cypress" />

import { navigationPage } from "../support/page_object/navigationPage"
import { onSmartTable } from "../support/page_object/smartTablePage"

describe('Test Smart Table Page', () => {

    beforeEach('Open Smart Table Page', () => {
        cy.openHomePage()
        navigationPage.formSmartTablePage()
    })

    it('Test Adding, changing and removing data in table', () => {

        onSmartTable.addNewRecordWithFirstAndLastName('Joe', 'Konn', '34')
        onSmartTable.modifingEmailCellByName('Joe', 'rk@gmail.com')
        onSmartTable.deleteRowByIndex(0)
    })
})