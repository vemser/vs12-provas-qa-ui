/// <reference types="cypress" />

describe('Tela de Login', () => {

    beforeEach(() => {
        cy.visit("/login")
    });

    it('CT-WEB-001.1 - Validar login como administrador com sucesso', () => {
        cy.fixture('login.data.json').then(data => {
            cy.efetuarLogin(data.admGeral.email, data.admGeral.senha)
        })
    })

    it('CT-WEB-002.1 - Validar login como gestor com sucesso', () => {
        cy.fixture('login.data.json').then(data => {
            cy.efetuarLogin(data.gestor.email, data.gestor.senha)
        })
    })

    it('CT-WEB-003.1 - Validar login como moderador com sucesso', () => {
        cy.fixture('login.data.json').then(data => {
            cy.efetuarLogin(data.moderador.email, data.moderador.senha)
        })
    })

    it('CT-WEB-004.1 - Validar login como candidato geral com sucesso', () => {
        cy.fixture('login.data.json').then(data => {
            cy.efetuarLogin(data.candidato.email, data.candidato.senha)
        })
    })

    it('CT-WEB-005.1 - Validar login sem sucesso (Campos Email e Senha vazios)', () => {
        cy.loginSemDados()
    })

    it('CT-WEB-005.2 - Validar login sem sucesso (Campo Email vazio)', () => {
        cy.fixture('login.data.json').then(data => {
            cy.loginSemEmail(data.candidato.senha)
        })
    })

    it('CT-WEB-005.3 - Validar login sem sucesso (Campo Senha vazio)', () => {
        cy.fixture('login.data.json').then(data => {
            cy.loginSemSenha(data.candidato.senha)
        })
    })

    it('CT-WEB-006.1 - Validar botão "Voltar" com sucesso', () => {
        cy.clicarBtnVoltar()
    })

    it('CT-WEB-007.1 - Validar botão Menu com sucesso', () => {
        cy.clicarBtnMenu()
    })

})