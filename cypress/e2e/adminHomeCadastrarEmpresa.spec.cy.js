/// <reference types="cypress"/>
import "../support/commands"

let mensagemCadastroComSucesso


describe('AdminHome - CadastrarEmpresa', () => {

    beforeEach(() => {
        cy.acessarCadastrarEmpresa();
        //cy.generateFixture();
        //cy.generateFaleConoscoFixture();
    });

    it('CT-WEB-024.1 - Validar "Cadastrar empresa" com sucesso', () => {
        cy.fixture('cadastrarEmpresa.data.json').then(data => {
            cy.cadastrarEmpresa(data.nomeFantasia, data.cnpj, data.nomeCompleto, data.email)
            
        })
    })

    it('CT-WEB-024.2 - Validar "Cadastrar empresa" sem sucesso (Nome Fantasia vazio)', () => {
        cy.fixture('cadastrarEmpresa.data.json').then(data => {
            
        })
    })

    it('CT-WEB-024.3 - Validar "Cadastrar empresa" sem sucesso (CNPJ vazio)', () => {
        cy.fixture('cadastrarEmpresa.data.json').then(data => {
            
        })
    })

    it('CT-WEB-024.4 - Validar "Cadastrar empresa" sem sucesso (Nome gestor vazio)', () => {
        cy.fixture('cadastrarEmpresa.data.json').then(data => {
            
        })
    })

    it('CT-WEB-024.5 - Validar "Cadastrar empresa" sem sucesso (E-mail vazio)', () => {
        cy.fixture('cadastrarEmpresa.data.json').then(data => {
            
        })
    })

});