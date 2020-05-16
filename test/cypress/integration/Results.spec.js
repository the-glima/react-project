/// <reference types="cypress" />

describe('Winning Numbers Results', () => {
  const loading = `[data-testid="loading"]`
  const numbersList = `[data-testid="numbers-list"]`
  const euroNumbersList = `[data-testid="euro-numbers-list"]`
  const resultsInfo = `[data-testid="results-info"]`
  const resultsTable = `[data-testid="results-table"]`
  const resultsTableRow = `[data-testid=table-row-0]`
  const primaryColor = `rgb(105, 165, 7)` 

  beforeEach(() => {
    cy.visit('/')
  })

  context('Large Resolution', () => {
    it('should check if results page and its components loads', () => {
      cy.get(loading).should('exist')
      cy.get(`${loading} div:first-child`)
        .should('have.css', 'background-color')
        .and('eq', primaryColor)

      cy.get('h1').should('contain', 'EUROJACKPOT RESULTS & WINNING NUMBERS')

      cy.get(loading).should('not.exist')

      cy.log('Check Results Numbers')
      cy.get('h2').should('contain', 'EuroJackpot Results for')

      cy.get(numbersList).should('exist')
      cy.get(euroNumbersList).should('exist')

      cy.log('Check Results Info')
      cy.get(resultsInfo).should('exist')
      
      cy.log('Check Results Table Data')
      cy.get(resultsTable).should('exist')
    })

    it('should check if results numbers component', () => {
      cy.log('Check Results Numbers')
      cy.get(`${numbersList} li`).should('have.length', 5)
      cy.get(`${euroNumbersList} li`).should('have.length', 2)

      cy.get(`${euroNumbersList} li`)
        .first()
        .should('have.css', 'background-color')
        .and('eq', primaryColor)
    })

    it('should check if results info component', () => {
      cy.log('Check Results Info')
      cy.get('h3').should('contain', 'The EuroJackpot numbers for')
      cy.get('p').should('contain', 'draw for the EuroJackpot was held on')
    })

    it('should check if results table component', () => {
      cy.get(`${resultsTable} tr`).should('have.length', 13)
      cy.get(`${resultsTable} thead`).should('be.visible')

      cy.get(`${resultsTable} th:first-child`)
        .should('contain', 'Tier')

      cy.get(`${resultsTable} th:nth-child(2)`)
        .should('contain', 'Match')

      cy.get(`${resultsTable} th:nth-child(3)`)
        .should('contain', 'Winners')

      cy.get(`${resultsTable} th:last-child`)
        .should('contain', 'Amount')
    })
  })

  context('Mobile Resolution', () => {
    beforeEach(() => {
      cy.viewport(375, 667)
    })

    it('should check that table data thead is not visible', () => {
      cy.get(`${resultsTable} thead`).should('not.be.visible')

      cy.get(`${resultsTableRow} > [data-thead="Tier"]`)
        .before('content')
        .should('eq', 'Tier') 

      cy.get(`${resultsTableRow} > [data-thead="Match"]`)
        .before('content')
        .should('eq', 'Match') 

      cy.get(`${resultsTableRow} > [data-thead="Winners"]`)
        .before('content')
        .should('eq', 'Winners') 

      cy.get(`${resultsTableRow} > [data-thead="Amount"]`)
        .before('content')
        .should('eq', 'Amount') 
    })
  })
})
