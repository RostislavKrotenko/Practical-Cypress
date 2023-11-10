/// <reference types="cypress" />

describe('test suite', () => {

    it('Calendar', () => {

        cy.visit('/')
        cy.contains('Extra Components').click()
        cy.contains('Calendar').click()

        cy.get('nb-base-calendar[ng-reflect-bounding-month="true"]').invoke('attr', 'ng-reflect-size').as('newValue').should('contain', 'medium')


        cy.get('nb-calendar[ng-reflect-bounding-month="true"]').find('button').then( buttonValue => {
            cy.wrap(buttonValue).eq(0).click()
        })

    })
})