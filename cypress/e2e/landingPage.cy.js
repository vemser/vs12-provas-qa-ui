/// <reference types="cypress" />

describe('landingPage', () => {

    beforeEach(() => {
        cy.visit("/")
    });

    it('Test 1 - Verificar todos os botões do Header', () => {
        cy.verificarBtnHeader()
    })

    it('Test 2 - Enviar uma mensagem com Sucesso', () => {
        cy.preencherFormularioDeixeSuaMensagemComDadosValidos()
    })

    it('Test 3 - Fazer login com Sucesso', () => {
        cy.fazerLogin()
        cy.url().should('eq', 'http://vemser-dbc.dbccompany.com.br:39000/vemser/vs12-provas-front/dashboard')
    })

})