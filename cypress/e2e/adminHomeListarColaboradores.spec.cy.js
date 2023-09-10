/// <reference types="cypress"/>


describe('AdminHomeListarColaboradores', () => {

    beforeEach(() => {
        cy.visit("/login")
        //cy.generateFixture();
        //cy.generateFaleConoscoFixture();
    });

    
    it('CT-WEB-028.1 - Validar "Listar Colaboradores" com sucesso', () => {
        cy.fixture('login.data.json').then(data => {
            cy.efetuarLogin(data.admGeral[0].email, data.admGeral[0].senha)
            cy.url().should('eq', 'http://vemser-dbc.dbccompany.com.br:39000/vemser/vs12-provas-front/dashboard')
        })
        cy.acessarListarColaboradores();
        cy.url().should('eq', 'http://vemser-dbc.dbccompany.com.br:39000/vemser/vs12-provas-front/listar/colaboradores')
    })



});