/// <reference types="cypress"/>
import "../support/commands"

let elementoLandingPage = '.sc-idyqAC'

describe('AdminHome', () => {

    beforeEach(() => {
        cy.acessarHome();
        //cy.generateFixture();
        //cy.generateFaleConoscoFixture();
    });

  
    it('CT-WEB-020.1 - Validar botão "Cadastrar colaborador" com sucesso', () => {
        cy.acessarCadastrarColaborador();
        cy.url().should('contain', '/cadastro/colaborador')
    })

    it('CT-WEB-022.0 - Validar botão "Cadastrar questões" com sucesso', () => {
        cy.acessarCadastrarQuestoes()
        cy.url().should('contain', '/cadastro/questoes')
    })

    it('CT-WEB-023.1 - Validar botão "Cadastrar empresa" com sucesso', () => {
        cy.acessarCadastrarEmpresa()
        cy.url().should('contain', '/cadastro/empresa')
    })

    it('CT-WEB-025.1 - Validar botão "Cadastrar Processo Seletivo" com sucesso', () => {
        cy.acessarCadastrarProcessoSeletivo()
        cy.url().should('contain', '/cadastro/processoSeletivo')
    })

    it('CT-WEB-027.1 - Validar botão "Listar Colaboradores" com sucesso', () => {
        cy.acessarListarColaboradores()
        cy.url().should('contain', '/listar/colaboradores')
    })

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
    
});