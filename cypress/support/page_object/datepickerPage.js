function selectDateFromCurrent(day) {
    let date = new Date()
    date.setDate(date.getDate() + day)
    let futureDay = date.getDate()
    let futureMonth = date.toLocaleDateString('en-US', {month: 'short'})
    let futureYear = date.getFullYear()
    let assertDate = `${futureMonth} ${futureDay}, ${futureYear}`
    
    cy.get('nb-calendar-navigation').invoke('attr', 'ng-reflect-date').then( dateAttribute => {
        if (!dateAttribute.includes(futureMonth) || !dateAttribute.includes(futureYear)) {
            cy.get('[data-name="chevron-right"]').click()
            selectDateFromCurrent(day)
        } else {
            cy.get('.day-cell').not('.bounding-month').contains(futureDay).click()
        }
    })
    return assertDate
}


export class DatePickerPage {

    selectCommonDatepickerDateFromToday(dayFromToday) {
        cy.contains('nb-card' ,'Common Datepicker').find('input').then( input => {
            cy.wrap(input).click()
            let dateToAssert = selectDateFromCurrent(dayFromToday)
            cy.wrap(input).invoke('prop', 'value').should('contain', dateToAssert)
            cy.wrap(input).should('have.value', dateToAssert)
        })
    }

    selectDatePickerRangeFromToday(firstDay, secondDay) {
        cy.contains('nb-card' ,'Datepicker With Range').find('input').then( input => {
            cy.wrap(input).click()
            let firstDateToAssert = selectDateFromCurrent(firstDay)
            let secondDateToAssert = selectDateFromCurrent(secondDay)
            const finalDate = firstDateToAssert+' - '+secondDateToAssert
            
            cy.wrap(input).invoke('prop', 'value').should('contain', finalDate)
            
            cy.wrap(input).should('have.value', finalDate)
        })
    }
}

export const onDatePickerPage = new DatePickerPage()