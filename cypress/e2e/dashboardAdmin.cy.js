/// <reference types="cypress" />

describe('loginPage', () => {

    beforeEach(() => {
        cy.visit("/")
        cy.gerarDadosDeUsuarios()
        cy.gerarDadosDeProcesso()
        cy.gerarDadosDeQuestao()
        cy.fazerLogin("ADMIN")
    });

    it('CT-WEB-004.0 - Validar cadastro de funcionario com sucesso', () => {
        // cy.url().should('eq', 'http://vemser-dbc.dbccompany.com.br:39000/vemser/vs12-provas-front/dashboard')
        cy.url().should('eq', 'https://provas-front.vercel.app/dashboard')
        cy.acessarCadastroDeColaboradorPeloMenuEmpresas()
        cy.cadastrarColaboradorComDadosValidos()
    })

    it('CT-WEB-004.1 - Validar cadastro de processo com sucesso', () => {
        // cy.url().should('eq', 'http://vemser-dbc.dbccompany.com.br:39000/vemser/vs12-provas-front/dashboard')
        cy.url().should('eq', 'https://provas-front.vercel.app/dashboard')
        cy.acessarCadastroDeProcessoPeloMenuEmpresas()
        cy.cadastrarProcessoComDadosValidos()
    })

    it('CT-WEB-004.2 - Validar listagem de colaboradores com sucesso', () => {
        // cy.url().should('eq', 'http://vemser-dbc.dbccompany.com.br:39000/vemser/vs12-provas-front/dashboard')
        cy.url().should('eq', 'https://provas-front.vercel.app/dashboard')
        cy.acessarListagemDeColaboradoresPeloMenuEmpresas()
    })

    it.only('CT-WEB-004.3 - Validar cadastro de questão com sucesso', () => {
        // cy.url().should('eq', 'http://vemser-dbc.dbccompany.com.br:39000/vemser/vs12-provas-front/dashboard')
        cy.url().should('eq', 'https://provas-front.vercel.app/dashboard')
        cy.acessarCadastroDeQuestãoPeloMenuProvas()
        cy.cadastrarProvaComDadosValidos()
    })


    it('CT-WEB-004.4 - Validar edição de usuário com sucesso', () => {
        // cy.url().should('eq', 'http://vemser-dbc.dbccompany.com.br:39000/vemser/vs12-provas-front/dashboard')
        cy.url().should('eq', 'https://provas-front.vercel.app/dashboard')
        cy.acessarConfiguracaoDoPerfilPeloMenuPerfil()
        cy.editarPerfilComDadosValidos()
    })
    
})