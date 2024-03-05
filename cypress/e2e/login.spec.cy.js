/// <reference types="cypress" />

describe('Tela de Login', () => {

    beforeEach(() => {
        cy.visit("/")
        cy.get('.desktop-links > :nth-child(5) > a').click()
    });

    it('CT-WEB-001.1 - Validar login como administrador com sucesso', () => {
        cy.fixture('login.data.json').then(data => {
            cy.efetuarLogin(data.admGeral[0].email, data.admGeral[0].senha)
            cy.url().should('eq', 'http://vemser-dbc.dbccompany.com.br:39000/vemser/vs12-provas-front/dashboard')
        })
    })

    it('CT-WEB-002.1 - Validar login como gestor com sucesso', () => {
        cy.fixture('login.data.json').then(data => {
            cy.efetuarLogin(data.gestor[0].email, data.gestor[0].senha)
            cy.url().should('eq', 'http://vemser-dbc.dbccompany.com.br:39000/vemser/vs12-provas-front/dashboard')
        })
    })

    it('CT-WEB-003.1 - Validar login como moderador com sucesso', () => {
        cy.fixture('login.data.json').then(data => {
            cy.efetuarLogin(data.moderador[0].email, data.moderador[0].senha)
            cy.url().should('eq', 'http://vemser-dbc.dbccompany.com.br:39000/vemser/vs12-provas-front/dashboard')
        })
    })

    it('CT-WEB-004.1 - Validar login como candidato geral com sucesso', () => {
        cy.fixture('login.data.json').then(data => {
            cy.efetuarLogin(data.candidato[0].email, data.candidato[0].senha)
            cy.url().should('eq', 'http://vemser-dbc.dbccompany.com.br:39000/vemser/vs12-provas-front/candidate')
        })
    })

    it('CT-WEB-005.1 - Validar login sem sucesso (Campos Email e Senha vazios)', () => {
        cy.loginSemDados()
    })

    it('CT-WEB-005.2 - Validar login sem sucesso (Campo Email vazio)', () => {
        cy.fixture('login.data.json').then(data => {
            cy.loginSemEmail(data.candidato[0].senha)
        })
    })

    it('CT-WEB-005.3 - Validar login sem sucesso (Campo Senha vazio)', () => {
        cy.fixture('login.data.json').then(data => {
            cy.loginSemSenha(data.candidato[0].senha)
        })
    })

    it('CT-WEB-006.1 - Validar botão "Voltar" com sucesso', () => {
        cy.clicarBtnVoltar()
    })

    it('CT-WEB-007.1 - Validar botão Menu com sucesso', () => {
        cy.viewport('iphone-6')
        cy.clicarBtnVoltar()
        cy.clicarBtnMenu()
    })

})