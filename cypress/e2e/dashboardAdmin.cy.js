/// <reference types="cypress" />

describe('dashboardAdmin', () => {

    beforeEach(() => {
        cy.visit("/")
        cy.gerarDadosDeUsuarios()
        cy.gerarDadosDeProcesso()
        cy.gerarDadosDeQuestao()
        cy.fazerLogin("ADMIN")
        cy.url().should('eq', 'http://vemser-dbc.dbccompany.com.br:39000/vemser/vs12-provas-front/dashboard')
        // cy.url().should('eq', 'https://provas-front.vercel.app/dashboard')
    });

    it('CT-WEB-004.0.0 - Validar cadastro de funcionario com sucesso', () => {
        cy.acessarCadastroDeColaboradorPeloMenuEmpresas()
        cy.cadastrarColaboradorComDadosValidos()
    })
    it('CT-WEB-004.0.1 - Validar cadastro de funcionario sem sucesso (sem dados)', () => {
        cy.acessarCadastroDeColaboradorPeloMenuEmpresas()
        cy.cadastrarColaboradorSemDados()
    })
    
    it('CT-WEB-004.1 - Validar cadastro de processo com sucesso', () => {
        cy.acessarCadastroDeProcessoPeloMenuEmpresas()
        cy.cadastrarProcessoComDadosValidos()
    })

    it('CT-WEB-004.2 - Validar listagem de colaboradores com sucesso', () => {
        cy.acessarListagemDeColaboradoresPeloMenuEmpresas()
    })

    it('CT-WEB-004.3 - Validar cadastro de questão com sucesso', () => {
        cy.acessarCadastroDeQuestãoPeloMenuProvas()
        cy.cadastrarProvaComDadosValidos()
    })

    it('CT-WEB-004.4 - Validar edição de usuário com sucesso', () => {
        cy.acessarConfiguracaoDoPerfilPeloMenuPerfil()
        cy.editarPerfilComDadosValidos("ADMIN")
    })
    
    it('CT-WEB-004.5 - Validar listagem de questões com sucesso', () => {
        cy.acessarListagemDeQuestãoPeloMenuProvas()
    })
})