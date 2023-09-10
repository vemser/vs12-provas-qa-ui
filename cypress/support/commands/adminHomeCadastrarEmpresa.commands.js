// Mapeamento
let campoEmailLogin = '#email'
let campoSenha = '[data-testid="input-password-form"]'
let btnEntrar = '.sc-hTJqdO'

let campoNomeFantasia = '#nome'
let campoCnpj = '#cnpj'
let campoNomeCompleto = '#nomeFuncionario'
let campoEmail = '#email'


let btnCadastrarColaborador = '.sc-lbNsEr > :nth-child(2) > :nth-child(1)'
let btnCadastrarQuestoes = '.sc-lbNsEr > :nth-child(2) > :nth-child(3)'
let btnCadastrarEmpresa = '.sc-lbNsEr > :nth-child(2) > :nth-child(2)'
let btnCadastrarProcessoSeletivo = '.sc-lbNsEr > :nth-child(2) > :nth-child(4)'
let btnListarColaboradores = '.sc-lbNsEr > :nth-child(4) > :nth-child(1)'
let btnListarEmpresas = '.sc-lbNsEr > :nth-child(4) > :nth-child(2)'
let btnListarCandidatos = ':nth-child(4) > :nth-child(3)'
let btnProvas = '.sc-gFWRCe > [href="/vemser/vs12-provas-front/dashboard/Provas"]'
let btnExportar = '.sc-gFWRCe > [href="/vemser/vs12-provas-front/dashboard/Exportar"]'
let btnPerfil = '.sc-gFWRCe > [href="/vemser/vs12-provas-front/dashboard/Perfil"]'
let btnSair = '.sign-out > path'
let btnCadastrar ='#btnCadastrar'
let btnCancelar = '#btnCancelar'


Cypress.Commands.add('acessarHome', () => {
    cy.visit("/login")
    cy.get(campoEmailLogin).type("admin@email.com")
    cy.get(campoSenha).type("Provas123")
    cy.get(btnEntrar).click()
})


Cypress.Commands.add('acessarCadastrarColaborador', () => {
    cy.get(btnCadastrarColaborador).click()   
})

Cypress.Commands.add('acessarCadastrarQuestoes', () => {
    cy.get(btnCadastrarQuestoes).click()
})

Cypress.Commands.add('acessarCadastrarEmpresa', () => {
    cy.get(btnCadastrarEmpresa).click({force: true})
})

Cypress.Commands.add('acessarCadastrarProcessoSeletivo', () => {
    cy.get(btnCadastrarProcessoSeletivo).click()
})

Cypress.Commands.add('acessarListarColaboradores', () => {
    cy.get(btnListarColaboradores).click()
})

Cypress.Commands.add('acessarListarEmpresas', () => {
    cy.get(btnListarEmpresas).click()
})

Cypress.Commands.add('acessarListarCandidatos', () => {
    cy.get(btnListarCandidatos).click()
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

Cypress.Commands.add('cadastrarEmpresaComSucesso', (nomeFantasia, cnpj, nomeCompleto, email) => {
    cy.get(btnCadastrarEmpresa).click({force: true})
    cy.get(campoNomeFantasia).type(nomeFantasia)
    cy.get(campoCnpj).type(cnpj)
    cy.get(campoNomeCompleto).type(nomeCompleto)
    cy.get(campoEmail).type(email)
    cy.get(btnCadastrar).click()
})