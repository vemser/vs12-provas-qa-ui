/// <reference types="cypress"/>
import "../support/commands"

let campoEmailLogin = '#email'
let campoSenha = '[data-testid="input-password-form"]'
let btnEntrar = '.sc-hTJqdO'

let mensagemCadastroComSucesso
let mensagemCadastroSemSucesso
let elementoLandingPage = '.sc-idyqAC'

describe('AdminHome', () => {

    beforeEach(() => {
        //cy.realizarLoginAdmin();
        cy.visit("/login")
        cy.get(campoEmailLogin).type("admin@email.com")
        cy.get(campoSenha).type("Provas123")
        cy.get(btnEntrar).click()
        //cy.generateFixture();
        //cy.generateFaleConoscoFixture();
    });

    it('CT-WEB-021.1 - Validar "Cadastrar funcionario" com sucesso', () => {
        cy.fixture('cadastrarColaborador.data.json').then(data => {
            cy.acessarCadastrarColaborador();
            cy.cadastrarFuncionario(data.nomeCompleto, data.email)
            cy.get(mensagemCadastroComSucesso).contains('Cadastro realizado com sucesso')
        })
    })

    it('CT-WEB-021.2 - Validar "Cadastrar funcionario" sem sucesso (Todos campos vazios)', () => {
        cy.acessarCadastrarColaborador();
        cy.cadastrarFuncionarioTudoVazio("", "")
        cy.get(mensagemCadastroSemSucesso).contains('Erro ao realizar cadastro')
    })

    it('CT-WEB-021.3 - Validar "Cadastrar funcionario" sem sucesso (Empresa vazio)', () => {
        cy.fixture('cadastrarFuncionario.data.json').then(data => {
            cy.acessarCadastrarColaborador();
            cy.cadastrarFuncionarioEmpresaVazio(data.nomeCompleto, data.email)
            cy.get(mensagemCadastroSemSucesso).contains('Erro ao realizar cadastro')
        })
    })

    it('CT-WEB-021.4 - Validar "Cadastrar funcionario" sem sucesso (Nome vazio)', () => {
        cy.fixture('cadastrarFuncionario.data.json').then(data => {
            cy.acessarCadastrarColaborador();
            cy.cadastrarFuncionario("", data.email)
            cy.get(mensagemCadastroSemSucesso).contains('Erro ao realizar cadastro')
        })
    })

    it('CT-WEB-021.5 - Validar "Cadastrar funcionario" sem sucesso (E-mail vazio)', () => {
        cy.fixture('cadastrarFuncionario.data.json').then(data => {
            cy.acessarCadastrarColaborador();
            cy.cadastrarFuncionario(data.nomeCompleto, "")
            cy.get(mensagemCadastroSemSucesso).contains('Erro ao realizar cadastro')
        })
    })

    it('CT-WEB-021.6 - Validar "Cadastrar funcionario" sem sucesso (Cargo vazio)', () => {
        cy.fixture('cadastrarFuncionario.data.json').then(data => {
            cy.acessarCadastrarColaborador();
            cy.cadastrarFuncionarioCargoVazio(data.nomeCompleto, data.email)
            cy.get(mensagemCadastroSemSucesso).contains('Erro ao realizar cadastro')
        })
    })

/*
    it('CT-WEB-029.1 - Validar botão "Provas" com sucesso', () => {
        cy.acessarProvas()
        cy.url().should('contain', '/dashboard/Provas')
    })

    it('CT-WEB-030.1 - Validar botão "Exportar" com sucesso', () => {
        cy.acessarExportar()
        cy.url().should('contain', '/dashboard/Exportar')
    })

    it('CT-WEB-031.1 - Validar botão "Perfil" com sucesso', () => {
        cy.acessarPerfil()
        cy.url().should('contain', '/dashboard/Perfil')
    })

    it('CT-WEB-032.1 - Validar botão "Sair" com sucesso', () => {
        cy.acessarSair()
        cy.get(elementoLandingPage).should("be.visible")
    })
*/
});