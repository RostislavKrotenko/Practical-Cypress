export class FormTreeGrid {

    clickOnRowByName(name='Projects') {
        cy.get('tbody').contains('td', name).find('[data-name="chevron-right"]').click()
        cy.get('tbody').contains('td', name)
                        .find('[data-name="Layer 2"]')
                        .find('g')
                        .should('have.attr', 'data-name')
                        .and('eq', 'chevron-down')
    }

    searchDocByName(name='project-1') {
        cy.get("#search").type(name)
        cy.get('tbody td').should('contain', 'project-1')
    }

    filterFiles(filterName='name') {
        cy.contains('button', filterName).click()
    }
}

export const formTreeGrid = new FormTreeGrid()