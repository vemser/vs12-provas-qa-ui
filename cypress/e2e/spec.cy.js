/// <reference types="cypress" />

describe('template spec', () => {

  it('Test 1 - gerando dados', () => {
    
    const site = Cypress.env('TESTE')
    cy.log(site)
    cy.visit(site)
    // cy.gerarDadosDeProcesso()
    // cy.gerarDadosDeUsuarios()

  })

})
