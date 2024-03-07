/// <reference types="cypress" />

describe('CT-WEB-02 - LoginPage', () => {

    beforeEach(() => {
        cy.visit("/")
        cy.gerarDadosDeUsuarios()
    });

    it('CT-WEB-002.0.0 - Validar login ADMIN com sucesso', () => {
        cy.fazerLogin("ADMIN")
        cy.url().should('eq', 'http://vemser-dbc.dbccompany.com.br:39000/vemser/vs12-provas-front/dashboard')
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
    
    it('CT-WEB-002.2.0 - Validar login sem sucesso com dados inválidos', () => {
        cy.fazerLoginComDadosInvalidos()
    })

    it('CT-WEB-002.2.1 - Validar botão voltar na página de login', () => {
        cy.clicarBotaoVoltar()
    })

    it('CT-WEB-002.2.2 - Validar botão voltar na página de login mobile', () => {
        cy.clicarBotaoVoltarMobile()
    })
    
    it('CT-WEB-002.2.3 - Validar login ADMIN com sucesso mobile', () => {
        cy.fazerLoginMobile("ADMIN")
        cy.url().should('eq', 'http://vemser-dbc.dbccompany.com.br:39000/vemser/vs12-provas-front/dashboard')
    })

    it('CT-WEB-002.2.4 - Validar login GESTOR com sucesso mobile', () => {
        cy.fazerLoginMobile("GESTOR")
        cy.url().should('eq', 'http://vemser-dbc.dbccompany.com.br:39000/vemser/vs12-provas-front/dashboard')
    })

    it('CT-WEB-002.2.5 - Validar login MODERADOR com sucesso', () => {
        cy.fazerLoginMobile("MODERADOR")
        cy.url().should('eq', 'http://vemser-dbc.dbccompany.com.br:39000/vemser/vs12-provas-front/dashboard')
    })

    it('CT-WEB-002.2.6 - Validar login CANDIDATO com sucesso', () => {
        cy.fazerLoginMobile("CANDIDATO")
        cy.url().should('eq', 'http://vemser-dbc.dbccompany.com.br:39000/vemser/vs12-provas-front/candidato')
    })

    it('CT-WEB-002.2.7 - Validar login sem sucesso (sem dados) mobile', () => {
        cy.fazerLoginSemDadosMobile()
    })

    it('CT-WEB-002.2.8 - Validar login sem sucesso (sem email) mobile', () => {
        cy.fazerLoginSemEmailMobile("ADMIN")
    })

    it('CT-WEB-002.2.9 - Validar login sem sucesso (sem senha) mobile', () => {
        cy.fazerLoginSemSenhaMobile("ADMIN")
    })
    
    it('CT-WEB-002.3.0 - Validar login sem sucesso com dados inválidos mobile', () => {
        cy.fazerLoginComDadosInvalidosMobile()
    })

})