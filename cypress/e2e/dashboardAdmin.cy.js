/// <reference types="cypress" />

describe('CT-WEB-04 - DashboardAdmin', () => {

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

    it.only('CT-WEB-004.3 - Validar cadastro de questão com sucesso', () => {
        cy.acessarCadastroDeQuestãoPeloMenuProvas()
        cy.cadastrarProvaObjetivaComDadosValidos()
    })

    it('CT-WEB-004.4 - Validar edição de usuário com sucesso', () => {
        cy.acessarConfiguracaoDoPerfilPeloMenuPerfil()
        cy.editarPerfilComDadosValidos("ADMIN")
    })
    
    it('CT-WEB-004.5 - Validar listagem de questões com sucesso', () => {
        cy.acessarListagemDeQuestãoPeloMenuProvas()
    })

    it('CT-WEB-004.6 - Validar cadastro de questão sem título sem sucesso', () => {
        cy.acessarCadastroDeQuestãoPeloMenuProvas()
        cy.tentarCadastrarProvaComTituloInvalido()
    })

    it('CT-WEB-004.7 - Validar cadastro de questão sem selecionar tema sem sucesso', () => {
        cy.acessarCadastroDeQuestãoPeloMenuProvas()
        cy.tentarCadastrarProvaSemSelecionarTema()
    })

    it('CT-WEB-004.8 - Validar cadastro de questão sem digitar enunciado sem sucesso', () => {
        cy.acessarCadastroDeQuestãoPeloMenuProvas()
        cy.tentarCadastrarProvaSemEnunciado()
    })
    
    it('CT-WEB-004.9 - Validar cadastro de questão sem preencher campo alternativas', () => {
        cy.acessarCadastroDeQuestãoPeloMenuProvas()
        cy.tentarCadastrarProvaSemCriarAlternativas()
    })

    it('CT-WEB-004.10 - Validar botão colaborador Home', () => {
        cy.clicarBtnColaboradorHome()
    })
    
    it('CT-WEB-004.10 - Validar botão candidato Home', () => {
        cy.clicarBtnCandidatoHome()
    })

    it('CT-WEB-004.11 - Validar botão empresa Home', () => {
        cy.clicarBtnEmpresaHome()
    })

    it('CT-WEB-004.12 - Validar botão questão Home', () => {
        cy.clicarBtnQuestaoHome()
    })

    it('CT-WEB-004.13 - Validar botão processo seletivo Home', () => {
        cy.clicarBtnProcessoHome()
    })

    it('CT-WEB-004.2 - Validar listagem de candidatos com sucesso', () => {
        cy.acessarListagemDeCandidatosPelaHome()
    })
    
    it('CT-WEB-004.2 - Validar listagem de empresas com sucesso', () => {
        cy.acessarListagemDeEmpresasPelaHome()
    })
    
})