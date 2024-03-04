/// <reference types="cypress" />

describe('loginPage', () => {

    beforeEach(() => {
        cy.visit("/")
        cy.gerarDadosDeUsuarios()
    });

    it('CT-WEB-002.0.0 - Validar login ADMIN com sucesso', () => {
        cy.fazerLogin("ADMIN")
        cy.url().should('eq', 'http://vemser-dbc.dbccompany.com.br:39000/vemser/vs12-provas-front/dashboard')
        // cy.url().should('eq', 'https://provas-front.vercel.app/dashboard')
    })

    it('CT-WEB-002.0.1 - Validar login GESTOR com sucesso', () => {
        cy.fazerLogin("GESTOR")
        cy.url().should('eq', 'http://vemser-dbc.dbccompany.com.br:39000/vemser/vs12-provas-front/dashboard')
    })

    it('CT-WEB-002.0.2 - Validar login MODERADOR com sucesso', () => {
        cy.fazerLogin("MODERADOR")
        cy.url().should('eq', 'http://vemser-dbc.dbccompany.com.br:39000/vemser/vs12-provas-front/dashboard')
    })

    it('CT-WEB-002.0.3 - Validar login CANDIDATO com sucesso', () => {
        cy.fazerLogin("CANDIDATO")
        cy.url().should('eq', 'http://vemser-dbc.dbccompany.com.br:39000/vemser/vs12-provas-front/candidato')
    })
    
    it('CT-WEB-002.1.0 - Validar login sem sucesso (sem dados)', () => {
        cy.fazerLoginSemDados()
    })

    it('CT-WEB-002.1.1 - Validar login sem sucesso (sem email)', () => {
        cy.fazerLoginSemEmail("ADMIN")
    })

    it('CT-WEB-002.1.2 - Validar login sem sucesso (sem senha)', () => {
        cy.fazerLoginSemSenha("ADMIN")
    })
    
    
    it('CT-WEB-002.2 - Validar login sem sucesso com dados inválidos', () => {
        cy.fazerLoginComDadosInvalidos()
    })

})