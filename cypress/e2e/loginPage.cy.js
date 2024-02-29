/// <reference types="cypress" />

describe('loginPage', () => {

    beforeEach(() => {
        cy.visit("/")
    });

    it('CT-WEB-002.0 - Validar login com sucesso ', () => {
        cy.fazerLogin()
        cy.url().should('eq', 'http://vemser-dbc.dbccompany.com.br:39000/vemser/vs12-provas-front/dashboard')
    })

})