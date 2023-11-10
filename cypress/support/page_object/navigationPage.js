function selectGroupMenuItem(groupName) {
    cy.contains('a', groupName).then(menu => {
        cy.wrap(menu).find('.expand-state g g').invoke('attr', 'data-name').then(attr => {
            if (attr.includes('left')) {
                cy.wrap(menu).click()
            }
        })
    })
}


export class NavigationPage {
    formLayoutsPage() {
        selectGroupMenuItem('Forms')
        cy.contains('Form Layouts').click()
    }
    formDataPickerPage() {
        selectGroupMenuItem('Forms')
        cy.contains('Datepicker').click()
    }
    formSteppertPage() {
        selectGroupMenuItem('Layout')
        cy.contains('Stepper').click()
    }
    formAccordionPage() {
        selectGroupMenuItem('Layout')
        cy.contains('Accordion').click()
    }
    formDialogPage() {
        selectGroupMenuItem('Modal & Overlays')
        cy.contains('Dialog').click()
    }
    formWindowPage() {
        selectGroupMenuItem('Modal & Overlays')
        cy.contains('Window').click()
    }
    formPopoverPage() {
        selectGroupMenuItem('Modal & Overlays')
        cy.contains('Popover').click()
    }
    formToastrPage() {
        selectGroupMenuItem('Modal & Overlays')
        cy.contains('Toastr').click()
    }
    formTooltipPage() {
        selectGroupMenuItem('Modal & Overlays')
        cy.contains('Tooltip').click()
    }
    formExtraComponentsPage() {
        selectGroupMenuItem('Extra Components')
        cy.contains('Calendar').click()
    }
    formSmartTablePage() {
        selectGroupMenuItem('Tables & Data')
        cy.contains('Smart Table').click()
    }
    formTreeGridPage() {
        selectGroupMenuItem('Tables & Data')
        cy.contains('Tree Grid').click()
    }
    formLoginPage() {
        selectGroupMenuItem('Auth')
        cy.contains('Login').click()
    }
    formRegisterPage() {
        selectGroupMenuItem('Auth')
        cy.contains('Register').click()
    }
    formRequestPasswordPage() {
        selectGroupMenuItem('Auth')
        cy.contains('Request Password').click()
    }
    formResetPasswordPage() {
        selectGroupMenuItem('Auth')
        cy.contains('Reset Password').click()
    }
}

export const navigationPage = new NavigationPage()