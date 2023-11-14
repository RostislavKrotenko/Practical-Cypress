function wrapper(times) {
    cy.get('.step-content').eq(0).contains('button', 'next').then( buttonNext => {
        cy.wrap(buttonNext).click()
    })

    if (times > 0) {
        times = times - 1
        wrapper(times)
    }
}

export class FormStepperPage {

    clickTopStepper(timesToStep) {
        wrapper(timesToStep)
    }
}

export const formStepperPage = new FormStepperPage()