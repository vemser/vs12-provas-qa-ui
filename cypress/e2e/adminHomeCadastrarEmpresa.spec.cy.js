/// <reference types="cypress"/>
import "../support/commands"

let mensagemCadastroComSucesso


describe('AdminHome - CadastrarEmpresa', () => {

    beforeEach(() => {        
        cy.visit("/")
        cy.get('.desktop-links > :nth-child(5) > a').click()
        cy.acessarHome();
        cy.gerarDadosDinamicos()
       
    });

    it('CT-WEB-024.1 - Validar "Cadastrar empresa" com sucesso', () => {
        cy.fixture('cadastrarEmpresa.data.json').then(data => {            
           
            cy.cadastrarEmpresaComSucesso(data.cadastroEmpresa[0].nomeFantasia, data.cadastroEmpresa[0].cnpj, data.cadastroEmpresa[0].nomeCompleto,data.cadastroEmpresa[0].email)
            cy.contains('Cadastro realizado com sucesso').should('be.visible')          
            
        })
    })

    it('CT-WEB-024.2 - Validar "Cadastrar empresa" sem sucesso (Nome Fantasia vazio)', () => {
        cy.fixture('cadastrarEmpresa.data.json').then(data => {
            cy.cadastrarEmpresaSemPassarNomeFantasiaSemSucesso(data.cadastroEmpresa[0].cnpj, data.cadastroEmpresa[0].nomeCompleto,data.cadastroEmpresa[0].email)
            cy.contains('Campo obrigatorio!').should('be.visible') 
            
        })
    })

    it('CT-WEB-024.3 - Validar "Cadastrar empresa" sem sucesso (CNPJ vazio)', () => {
        cy.fixture('cadastrarEmpresa.data.json').then(data => {
            cy.cadastrarEmpresaSemPassarCnpjSemSucesso(data.cadastroEmpresa[0].nomeFantasia, data.cadastroEmpresa[0].nomeCompleto,data.cadastroEmpresa[0].email)
            cy.contains('Campo obrigatorio!').should('be.visible')            
        })
    })

    it('CT-WEB-024.4 - Validar "Cadastrar empresa" sem sucesso (Nome gestor vazio)', () => {
        cy.fixture('cadastrarEmpresa.data.json').then(data => {
            cy.cadastrarEmpresaSemNomeCompletoSemSucesso(data.cadastroEmpresa[0].nomeFantasia, data.cadastroEmpresa[0].cnpj, data.cadastroEmpresa[0].email)
            cy.contains('Campo obrigatorio!').should('be.visible') 
            
        })
    })

    it('CT-WEB-024.5 - Validar "Cadastrar empresa" sem sucesso (E-mail vazio)', () => {
        cy.fixture('cadastrarEmpresa.data.json').then(data => {
            cy.cadastrarEmpresaSemEmailSemSucesso(data.cadastroEmpresa[0].nomeFantasia, data.cadastroEmpresa[0].cnpj, data.cadastroEmpresa[0].nomeCompleto)
            cy.contains('Campo obrigatório').should('be.visible') 
            
        })
    })    

});