function wrapperNext(times, numberOfStepper) {
    cy.get('.step-content').eq(numberOfStepper).contains('button', 'next').then( buttonNext => {
        cy.wrap(buttonNext).click()
    })

    if (times > 1) {
        times = times - 1
        wrapperNext(times, numberOfStepper)
    }
}

function wrapperPrev(times, numberOfStepper) {
    cy.get('.step-content').eq(numberOfStepper).contains('button', 'prev').then( buttonPrev => {
        cy.wrap(buttonPrev).click()
    })

    if (times > 1) {
        times = times - 1
        wrapperPrev(times, numberOfStepper)
    }
}

export class FormStepperPage {

    clickTopStepperNextButton(timesToStep) {
        wrapperNext(timesToStep, 0)
    }

    clickTopStepperPreviousButton(timesToStep) {
        wrapperPrev(timesToStep, 0)
    }

    clickRightBottomStepperNextButton(timesToStep) {
        wrapperNext(timesToStep, 2)
    }

    clickRightBottomStepperPreviousButton(timesToStep) {
        wrapperPrev(timesToStep, 2)
    }
}

export const formStepperPage = new FormStepperPage()