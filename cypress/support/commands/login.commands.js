// Mapeamento
let campoEmail = '#email';
let campoSenha = '#senha';
let btnEntrar = '#btnEntrar';
let btnVoltar = '#btnVoltar';
let btnMenuMobile = '#btnMobile';


// Ações
Cypress.commands.add('efetuarLogin', (email, senha) => {
    cy.visit("/login")
    cy.get(campoEmail).clear()
    cy.get(campoEmail).type(email)
    cy.get(campoSenha).type(senha)
    cy.get(btnLogar).click()
})

Cypress.Commands.add('loginSemDados', () => {
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

Cypress.Commands.add('clicarBtnVoltar', () => {
    cy.get(btnVoltar).click()
})

Cypress.Commands.add('clicarBtnMenu', () => {
    cy.get(btnMenu).click()
})