/// <reference types="cypress"/>
import "../support/commands"


describe('AdminHomeCadastrarColaborador', () => {

    beforeEach(() => {
        cy.visit("/")
        cy.get('.desktop-links > :nth-child(5) > a').click()
        cy.acessarHome();
        cy.gerarDadosDinamicos();
    });

    it('CT-WEB-021.1 - Validar "Cadastrar Colaborador" com sucesso', () => {
        cy.fixture('cadastrarColaborador.data.json').then(data => {
            cy.acessarCadastrarColaborador();
            cy.cadastrarColaborador(data.cadastroColaborador[0].nomeCompleto, data.cadastroColaborador[0].email)
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
            cy.cadastrarColaboradorEmpresaVazio(data.cadastroColaborador[0].nomeCompleto, data.cadastroColaborador[0].email)
            cy.contains('Campo obrigatório').should('be.visible')
        })
    })

    it('CT-WEB-021.4 - Validar "Cadastrar Colaborador" sem sucesso (Nome vazio)', () => {
        cy.fixture('cadastrarColaborador.data.json').then(data => {
            cy.acessarCadastrarColaborador();
            cy.cadastrarColaboradorNomeVazio(data.cadastroColaborador[0].email)
            cy.contains('Campo obrigatório').should('be.visible')
        })
    })

    it('CT-WEB-021.5 - Validar "Cadastrar Colaborador" sem sucesso (E-mail vazio)', () => {
        cy.fixture('cadastrarColaborador.data.json').then(data => {
            cy.acessarCadastrarColaborador();
            cy.cadastrarColaboradorEmailVazio(data.cadastroColaborador[0].nomeCompleto)
            cy.contains('Campo obrigatório').should('be.visible')
        })
    })

    it('CT-WEB-021.6 - Validar "Cadastrar Colaborador" sem sucesso (Cargo vazio)', () => {
        cy.fixture('cadastrarColaborador.data.json').then(data => {
            cy.acessarCadastrarColaborador();
            cy.cadastrarColaboradorCargoVazio(data.cadastroColaborador[0].nomeCompleto, data.cadastroColaborador[0].email)
            cy.contains('Campo obrigatório').should('be.visible')
        })
    })
});