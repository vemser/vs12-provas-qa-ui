/// <reference types="cypress" />

describe('loginPage', () => {

    beforeEach(() => {
        cy.visit("/")
        cy.gerarDadosDeUsuarios()
        cy.fazerLogin()
    });

    it.only('CT-WEB-003.0 - Validar cadastro de funcionario com sucesso', () => {
        // cy.url().should('eq', 'http://vemser-dbc.dbccompany.com.br:39000/vemser/vs12-provas-front/dashboard')
        cy.url().should('eq', 'https://provas-front.vercel.app/dashboard')
        cy.acessarCadastroDeColaboradorPeloMenuEmpresas()
        cy.cadastrarColaboradorComDadosValidos()
    })
})