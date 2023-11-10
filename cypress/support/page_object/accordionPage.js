export class FormAccordionPage {
    
    clickTogleFirstItem() {
        cy.contains('nb-card', 'Toggle Accordion By Button').contains('button', 'Toggle First Item').click()
        cy.contains('nb-accordion-item', 'Product Details').then (accordion => {
            cy.wrap(accordion).should('have.class', 'expanded')
            cy.wrap(accordion).find('[data-name="chevron-down"]').invoke('click')
        })
    }
}

export const formAccordionPage = new FormAccordionPage()