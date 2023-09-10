/// <reference types="cypress"/>
import "../support/commands"



let mensagemCadastroComSucesso
let elementoLandingPage = '.sc-idyqAC'

describe('AdminHomeCadastrarColaborador', () => {

    beforeEach(() => {
        cy.acessarCadastrarColaborador();
        //cy.generateFixture();
        //cy.generateFaleConoscoFixture();
    });

    it('CT-WEB-021.1 - Validar "Cadastrar Colaborador" com sucesso', () => {
        cy.fixture('cadastrarColaborador.data.json').then(data => {
            cy.acessarCadastrarColaborador();
            cy.cadastrarColaborador(data.nomeCompleto, data.email)
            cy.contains('Cadastro realizado com sucesso').should('be.visible')
        })
    })

    it('CT-WEB-021.2 - Validar "Cadastrar Colaborador" sem sucesso (Todos campos vazios)', () => {
        cy.acessarCadastrarColaborador();
        cy.cadastrarColaboradorTudoVazio()
        cy.contains('Campo obrigatório').should('be.visible')
    })

    it('CT-WEB-021.3 - Validar "Cadastrar Colaborador" sem sucesso (Empresa vazio)', () => {
        cy.fixture('cadastrarColaborador.data.json').then(data => {
            cy.acessarCadastrarColaborador();
            cy.cadastrarColaboradorEmpresaVazio(data.nomeCompleto, data.email)
            cy.contains('Campo obrigatório').should('be.visible')
        })
    })

    it('CT-WEB-021.4 - Validar "Cadastrar Colaborador" sem sucesso (Nome vazio)', () => {
        cy.fixture('cadastrarColaborador.data.json').then(data => {
            cy.acessarCadastrarColaborador();
            cy.cadastrarColaboradorNomeVazio(data.email)
            cy.contains('Campo obrigatório').should('be.visible')
        })
    })

    it('CT-WEB-021.5 - Validar "Cadastrar Colaborador" sem sucesso (E-mail vazio)', () => {
        cy.fixture('cadastrarColaborador.data.json').then(data => {
            cy.acessarCadastrarColaborador();
            cy.cadastrarColaboradorEmailVazio(data.nomeCompleto)
            cy.contains('Campo obrigatório').should('be.visible')
        })
    })

    it('CT-WEB-021.6 - Validar "Cadastrar Colaborador" sem sucesso (Cargo vazio)', () => {
        cy.fixture('cadastrarColaborador.data.json').then(data => {
            cy.acessarCadastrarColaborador();
            cy.cadastrarColaboradorCargoVazio(data.nomeCompleto, data.email)
            cy.contains('Campo obrigatório').should('be.visible')
        })
    })

    it('CT-WEB-xxx - Validar botão "Cancelar" com sucesso', () => {
        cy.acessarCancelar()
        cy.url().should('contain', "/dashboard/Home" )
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