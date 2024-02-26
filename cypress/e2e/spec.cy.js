  /// <reference types="cypress" />

describe('template spec', () => {

  it('Test 1 - gerando dados', () => {
    
    cy.gerarDadosDeProcesso()
    cy.gerarDadosDeUsuarios()

  })

})
