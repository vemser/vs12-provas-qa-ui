/// <reference types="cypress" />

describe('loginPage', () => {

    beforeEach(() => {
        cy.visit("/")
    });

    it('CT-WEB-002.0 - Validar login com sucesso', () => {
        cy.fazerLogin()
        // cy.url().should('eq', 'http://vemser-dbc.dbccompany.com.br:39000/vemser/vs12-provas-front/dashboard')
        cy.url().should('eq', 'https://provas-front.vercel.app/dashboard')
    })

    it('CT-WEB-002.1 - Fazer o login sem dados', () => {
        cy.fazerLoginSemDados()
    })
    
    it('CT-WEB-002.2 - Fazer o login com dados inválidos', () => {
        cy.fazerLoginComDadosInvalidos()
    })
})