let btnLogin = '[data-testid="linkLoginHeader"]'

// Login
let campoEmailLogin = '[data-testid="inputEmailLogin"]'
let campoSenha = '[data-testid="inputPasswordLogin"]'
let btnEntrar = '[data-testid="btnSubmitLogin"]'

Cypress.Commands.add('fazerLogin', () => {
    
    cy.clicar(btnLogin)
    cy.get(btnEntrar).should('be.visible')
    cy.preencherCampo(campoEmailLogin, Cypress.env('LOGIN_ADMIN'))
    cy.preencherCampo(campoSenha, Cypress.env('SENHA_ADMIN'))
    cy.clicar(btnEntrar)
})