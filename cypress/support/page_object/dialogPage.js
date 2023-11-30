export class FormDialogPage {
    
    dismissDialog() {
        cy.contains('button', 'Dismiss Dialog').click()
    }
    closeDialog() {
        cy.contains('button', 'Close Dialog').click()
    }
    openDialogWithComponent() {
        cy.contains('nb-card', 'Open Dialog').contains('button', 'Open Dialog with component').click()
    }
    openDialogWithTemplate() {
        cy.contains('nb-card', 'Open Dialog').contains('button', 'Open Dialog with template').click()
    }
    enterNameInReturnResultFromDialog(name, submit=true) {
        cy.contains('nb-card', 'Return Result From Dialog').find('button').click()
        cy.get('[placeholder="Name"]').then( input => {
            cy.wrap(input).type(name)
            cy.wrap(input).invoke('prop', 'value').should('contain', name)
        })

        if (submit) {
            cy.get('[status="success"]').click()
        } else {
            cy.get('[status="danger"]').click()
        }
    }
}

export const formDialogPage = new FormDialogPage()