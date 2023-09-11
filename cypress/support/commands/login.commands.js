// Mapeamento
let campoEmail = '#email';
let campoSenha = '[data-testid="input-password-form"]';
let btnEntrar = '.sc-jfLZDZ';
let btnVoltar = '.IconLink';
let btnMenuMobile = '[data-testid="MenuIcon"]';


// Ações
Cypress.Commands.add('efetuarLogin', (email, senha) => {
    cy.get(campoEmail).clear()
    cy.get(campoEmail).type(email)
    cy.get(campoSenha).type(senha)
    cy.get(btnEntrar).click()
})

Cypress.Commands.add('loginSemDados', () => {
    cy.get(btnEntrar).click()
})

Cypress.Commands.add('loginSemEmail', (senha) => {
    cy.get(campoSenha).type(senha)
    cy.get(btnEntrar).click()
})

Cypress.Commands.add('loginSemSenha', (email) => {
    cy.get(campoEmail).type(email)
    cy.get(btnEntrar).click()
})

Cypress.Commands.add('clicarBtnVoltar', () => {
    cy.get(btnVoltar).click()
})

Cypress.Commands.add('clicarBtnMenu', () => {
    cy.get(btnMenuMobile).click()
})