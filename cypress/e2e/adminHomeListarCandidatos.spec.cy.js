/// <reference types="cypress"/>


describe('AdminHomeListarEmpresa', () => {

    beforeEach(() => {
        cy.visit("/login")
        //cy.generateFixture();
        //cy.generateFaleConoscoFixture();
    });

    
    it('CT-WEB-030.1 - Validar "Listar Candidatos" com sucesso', () => {
        cy.fixture('login.data.json').then(data => {
            cy.efetuarLogin(data.admGeral[0].email, data.admGeral[0].senha)
            cy.url().should('eq', 'http://vemser-dbc.dbccompany.com.br:39000/vemser/vs12-provas-front/dashboard')
        })
        cy.acessarListarEmpresas();
        cy.url().should('eq', 'http://vemser-dbc.dbccompany.com.br:39000/vemser/vs12-provas-front/listar/candidatos')
    })



});