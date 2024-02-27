/// <reference types="cypress" />

describe('template spec', () => {

  it('Test 1 - gerando dados', () => {
    
    const ADMIN = Cypress.env('LOGIN_ADMIN')
    cy.log(ADMIN)
    const MODERADOR = Cypress.env('LOGIN_MODERADOR')
    cy.log(MODERADOR)
    const GESTOR = Cypress.env('LOGIN_GESTOR')
    cy.log(GESTOR)
    const site = Cypress.env('LOGIN_CANDIDATO')
    cy.log(site)

    cy.gerarDadosDeProcesso()
    cy.gerarDadosDeUsuarios()

  })

})
