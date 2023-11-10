export class FormStepperPage {

    submitTopStepper(timesToClick) {
        cy.contains('nb-stepper', 'Step content #1').contains('[type="submit"]', 'next').then( nextButton => {
            for (let i = 0; i < timesToClick; i++) {
                cy.wrap(nextButton).click()
            }
        })
    }
}

export const formStepperPage = new FormStepperPage()