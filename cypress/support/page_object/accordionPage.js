export class FormAccordionPage {
    
    clickTogleFirstItem() {
        cy.contains('nb-card', 'Toggle Accordion By Button').contains('button', 'Toggle First Item').as('collapseButton').click()
        cy.contains('nb-accordion-item', 'Product Details').then (accordion => {
            cy.wrap(accordion).should('have.class', 'expanded')
        })
        cy.get('@collapseButton').click()

        cy.contains('nb-accordion-item-header', 'Product Details')
            .find('g g')
            .should('have.attr', 'data-name')
            .and('eq', 'chevron-down')
    }
}

export const formAccordionPage = new FormAccordionPage()