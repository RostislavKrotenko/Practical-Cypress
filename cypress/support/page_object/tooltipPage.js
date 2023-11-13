export class FormTooltipPage {

    clickOnTooltipsByContainerAndButtonName(containerName='Colored Tooltips', buttonName='Default') {
        cy.contains("nb-card", containerName).contains('button', buttonName).then( button => {
            cy.wrap(button).click()
            cy.get('nb-tooltip').should('contain', 'This is a tooltip')
        })
    }

}

export const formTooltipPage = new FormTooltipPage()