import { closeSync } from "fs"

export class FormPopoverPage {

    clickLeftOnPopoverPosition() {
        cy.contains('nb-card', 'Popover Position').find('[nbpopoverplacement="left"]').click()
    }
    clickTopOnPopoverPosition() {
        cy.contains('nb-card', 'Popover Position').find('[nbpopoverplacement="top"]').click()
    }
    clickBottomOnPopoverPosition() {
        cy.contains('nb-card', 'Popover Position').find('[nbpopoverplacement="bottom"]').click()
    }
    clickRightOnPopoverPosition() {
        cy.contains('nb-card', 'Popover Position').find('[nbpopoverplacement="right"]').click()
    }
    clickWithFirstTabsTemplatePopovers() {
        cy.contains('nb-card', 'Template Popovers').find('button').eq(0).click()
        cy.contains('nb-tabset', "What's up?").should('contain', 'Such a wonderful day!')
    }
    clickWithSecondTabTemplatePopovers() {
        cy.contains('nb-card', 'Template Popovers').find('button').eq(0).click()
        cy.contains('span', "Second Tab").click()
        cy.get('[tabtitle="Second Tab"]').should('contain', 'Indeed!')
    }
    clickWithFormbTemplatePopovers(recipients, subject, message) {
        cy.contains('nb-card', 'Template Popovers').find('button').eq(1).click()
        cy.get('form').then( form => {
            cy.wrap(form).find('[placeholder="Recipients"]').then(input => {
                cy.wrap(input).type(recipients)
                cy.wrap(input).invoke('prop', 'value').should('contain', recipients)
            })
            cy.wrap(form).find('[placeholder="Subject"]').then( input => {
                cy.wrap(input).type(subject)
                cy.wrap(input).invoke('prop', 'value').should('contain', subject)
            })
            cy.wrap(form).find('[placeholder="Message"]').then( input => {
                cy.wrap(input).type(message)
                cy.wrap(input).invoke('prop', 'value').should('contain', message)
            })
            cy.wrap(form).submit()
        })
    }
    clickWithCardTemplatePopovers() {
        cy.contains('nb-card', 'Template Popovers').find('button').eq(2).click()
        cy.get('.popover-card').find('nb-card-header').should('contain', 'Hello! ')
    }
}

export const formPopoverPage = new FormPopoverPage()