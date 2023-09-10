// Mapeamento
let campoEmailLogin = '#email'
let campoSenha = '[data-testid="input-password-form"]'
let btnEntrar = '.sc-hTJqdO'

let btnCadastrarColaborador = '.sc-lbNsEr > :nth-child(2) > :nth-child(1)'
let dropdownEmpresa = '#empresa'
let campoNomeCompletoColaborador = '#userName'
let campoEmailColaborador = '#email'
let dropdownCargo = '#userRole'
let btnCadastrar = '#btnCadastrar'
let btnCancelar= '#btnCancelar'



Cypress.Commands.add('acessarCadastrarColaborador', () => {
    cy.visit("/login")
    cy.get(campoEmailLogin).type("admin@email.com")
    cy.get(campoSenha).type("Provas123")
    cy.get(btnEntrar).click()
    cy.get(btnCadastrarColaborador).click()
})

Cypress.Commands.add('cadastrarColaborador', (nomeCompleto, email) => {
    cy.get(dropdownEmpresa).select(1)
    cy.get(campoNomeCompletoColaborador).type(nomeCompleto)
    cy.get(campoEmailColaborador).type(email)
    cy.get(dropdownCargo).select(1)
    cy.get(btnCadastrar).click()
})

Cypress.Commands.add('cadastrarColaboradorTudoVazio', () => {
    cy.get(btnCadastrar).click()
})

Cypress.Commands.add('cadastrarColaboradorEmpresaVazio', (nomeCompleto, email) => {
    cy.get(campoNomeCompletoColaborador).type(nomeCompleto)
    cy.get(campoEmailColaborador).type(email)
    cy.get(dropdownCargo).select(1)
    cy.get(btnCadastrar).click()
})

Cypress.Commands.add('cadastrarColaboradorNomeVazio', (email) => {
    cy.get(dropdownEmpresa).select(1)
    cy.get(campoEmailColaborador).type(email)
    cy.get(dropdownCargo).select(1)
    cy.get(btnCadastrar).click()
})

Cypress.Commands.add('cadastrarColaboradorEmailVazio', (nomeCompleto) => {
    cy.get(dropdownEmpresa).select(1)
    cy.get(campoNomeCompletoColaborador).type(nomeCompleto)
    cy.get(dropdownCargo).select(1)
    cy.get(btnCadastrar).click()
})

Cypress.Commands.add('cadastrarColaboradorCargoVazio', (nomeCompleto, email) => {
    cy.get(dropdownEmpresa).select(1)
    cy.get(campoNomeCompletoColaborador).type(nomeCompleto)
    cy.get(campoEmailColaborador).type(email)
    cy.get(btnCadastrar).click()
})

Cypress.Commands.add('acessarCancelar', () => {
    cy.get(btnCancelar).click()
})