// Mapeamento
let campoEmailLogin = '#email'
let campoSenha = '[data-testid="input-password-form"]'
let btnEntrar = '.sc-hTJqdO'

let descricaoTelaHome = '.sc-gSkWNA > :nth-child(2)'
let btnHome = '.sc-clcPSL > .active'
    let btnCadastrarColaborador = '.sc-lbNsEr > :nth-child(2) > :nth-child(1)'
        let dropdownEmpresa = '#empresa'
        let campoNomeCompletoColaborador = '#userName'
        let campoEmailColaborador = '#email'
        let dropdownCargo = '#userRole'
        let cargo1 = '#userRole > option:nth-child(2)'
        let btnCadastrar1 = '#btnCadastrar'
        let btnCancelar1 = '#btnCancelar'
let btnProvas = '.sc-gFWRCe > [href="/vemser/vs12-provas-front/dashboard/Provas"]'
let btnExportar = '.sc-gFWRCe > [href="/vemser/vs12-provas-front/dashboard/Exportar"]'
let btnPerfil = '.sc-gFWRCe > [href="/vemser/vs12-provas-front/dashboard/Perfil"]'
let btnSair = '.sign-out > path'


Cypress.Commands.add('acessarCadastrarColaborador', () => {
    cy.visit("/login")
    cy.get(campoEmailLogin).type("admin@email.com")
    cy.get(campoSenha).type("Provas123")
    cy.get(btnEntrar).click()
    cy.get(btnCadastrarColaborador).click()
})

Cypress.Commands.add('cadastrarFuncionario', (NomeCompletoFuncionario, EmailFuncionario) => {
    //cy.get(dropdownEmpresa).select(1)
    cy.get(campoNomeCompletoColaborador).type(NomeCompletoFuncionario)
    cy.get(campoEmailColaborador).type(EmailFuncionario)
    cy.get(dropdownCargo).select(1)
    cy.get(btnCadastrar1).click()
})

Cypress.Commands.add('cadastrarFuncionarioTudoVazio', (NomeCompletoFuncionario, EmailFuncionario) => {
    cy.get(campoNomeCompletoColaborador).type(NomeCompletoFuncionario)
    cy.get(campoEmailColaborador).type(EmailFuncionario)
    cy.get(btnCadastrar1).click()
})

Cypress.Commands.add('cadastrarFuncionarioEmpresaVazio', (NomeCompletoFuncionario, EmailFuncionario) => {
    cy.get(campoNomeCompletoColaborador).type(NomeCompletoFuncionario)
    cy.get(campoEmailColaborador).type(EmailFuncionario)
    cy.get(dropdownCargo).click()
    cy.get(cargo1).click()
    cy.get(btnCadastrar1).click()
})
/*
Cypress.Commands.add('cadastrarFuncionarioNomeVazio', (EmailFuncionario) => {
    cy.get(dropdownEmpresa).click()
    cy.get(empresa1).click()
    cy.get(campoEmailColaborador).type(EmailFuncionario)
    cy.get(dropdownCargo).click()
    cy.get(cargo1).click()
    cy.get(btnCadastrar1).click()
})

Cypress.Commands.add('cadastrarFuncionarioEmailVazio', (NomeCompletoFuncionario) => {
    cy.get(dropdownEmpresa).click()
    cy.get(empresa1).click()
    cy.get(campoNomeCompletoColaborador).type(NomeCompletoFuncionario)
    cy.get(dropdownCargo).click()
    cy.get(cargo1).click()
    cy.get(btnCadastrar1).click()
})
*/
Cypress.Commands.add('cadastrarFuncionarioCargoVazio', (NomeCompletoFuncionario, EmailFuncionario) => {
    cy.get(dropdownEmpresa).click()
    cy.get(empresa1).click()
    cy.get(campoNomeCompletoColaborador).type(NomeCompletoFuncionario)
    cy.get(campoEmailColaborador).type(EmailFuncionario)
    cy.get(btnCadastrar1).click()
})

Cypress.Commands.add('acessarProvas', () => {
    cy.get(btnProvas).click()
})

Cypress.Commands.add('acessarExportar', () => {
    cy.get(btnExportar).click()
})

Cypress.Commands.add('acessarPerfil', () => {
    cy.get(btnPerfil).click()
})

Cypress.Commands.add('acessarSair', () => {
    cy.get(btnSair).click()
})