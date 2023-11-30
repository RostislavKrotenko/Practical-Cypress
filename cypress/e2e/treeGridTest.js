/// <reference types="cypress" />

import { navigationPage } from "../support/page_object/navigationPage"
import { formTreeGrid } from "../support/page_object/treeGridPage"

describe('Test Tree Grid Page', () => {

    beforeEach('Open Tree Grid Page', () => {
        cy.openHomePage()
        navigationPage.formTreeGridPage()
    })

    it('Test searching and filtering in table', () => {
        formTreeGrid.clickOnRowByName('Reports')
        formTreeGrid.clickOnRowByName('Projects')
        formTreeGrid.filterFiles('size')
        formTreeGrid.filterFiles('name')
        formTreeGrid.searchDocByName('project-2')
    })
})