let campoEmail = '#email';
let campoSenha = '#senha';
let btnLogar = '#btnLogar';
let textTela = '#msgDeSucesso';

Cypress.commands.add('efetuarLogin', (email, senha) => {
    cy.visit("/login")
    cy.get(campoEmail).clear()
    cy.get(campoEmail).type(email)
    cy.get(campoSenha).type(senha)
    cy.get(btnLogar).click()
    cy.get(textTela).should('contain', msg)
})

Cypress.Commands.add('efetuarLoginSemMensagem', (email, senha) => {
    cy.visit("/login")
    cy.get(campoEmail).clear()
    cy.get(campoEmail).type(email)
    cy.get(campoSenha).type(senha)
    cy.get(btnLogar).click()
})
Cypress.Commands.add('loginSemEmail', (senha) => {
    cy.get(campoSenha).type(senha)
    cy.get(btnLogar).click()
})
Cypress.Commands.add('loginSemSenha', (email) => {
    cy.get(campoEmail).type(email)
    cy.get(btnLogar).click()
})