// Mapeamento
let btnHome = '#btnHome';
let btnNossaProposta = '#btnNossaProposta';
let btnComoFunciona = '#btnFunciona';
let btnContato = '#btnContato';
let btnLogin = '#btnLogin';
let btnConhecaJa = '#btnConhecaJa';
let campoNome = '#campoNome';
let campoEmail = '#campoEmail';
let campoMensagem = '#campoMensagem';
let btnEnviar = '#btnEnviar';
let btnInscreva = '#btnInscrever';
let btnFooterHome = '#btnFooterHome';
let btnFooterNossaProposta = '#btnFooterNossaProposta';
let btnFooterComoFunciona = '#btnFooterComoFunciona';
let btnFooterContato = '#btnFooterContato';
let btnFooterLogin = '#btnFooterLogin';
let btnFooterLinkedin = '#btnFooterLinkedin';
let btnFooterInstagram = '#btnFooterInstagram';
let btnFooterYoutube = '#btnFooterYoutube';
let btnFooterTwitter = '#btnFooterTwitter';
let btnFooterFacebook = '#btnFooterFacebook';
let btnMenu = "#btnMenu";

// Ações
Cypress.commands.add('clicarBtnHomeNavbar', () => {
    cy.visit("/home")
    cy.get(btnHome).click()
})

Cypress.commands.add('clicarBtnNossaPropostaNavbar', () => {
    cy.visit("/home")
    cy.get(btnNossaProposta).click()
})

Cypress.commands.add('clicarBtnComoFuncionaNavbar', () => {
    cy.visit("/home")
    cy.get(btnComoFunciona).click()
})

Cypress.commands.add('clicarBtnContatoNavbar', () => {
    cy.visit("/home")
    cy.get(btnContato).click()
})

Cypress.commands.add('clicarBtnLoginNavbar', () => {
    cy.visit("/home")
    cy.get(btnLogin).click()
})

Cypress.commands.add('clicarBtnConhecaJa', () => {
    cy.visit("/home")
    cy.get(btnConhecaJa).click()
})

Cypress.commands.add('preencherDuvidaCompleto', (nome, email, mensagem) => {
    cy.visit("/home")
    cy.get(campoNome).type(nome)
    cy.get(campoEmail).type(email)
    cy.get(campoMensagem).type(mensagem)
    cy.get(btnEnviar).click()
})

Cypress.commands.add('preencherDuvidaVazio', () => {
    cy.visit("/home")
    cy.get(btnEnviar).click()
})

Cypress.commands.add('preencherDuvidaSemNome', (email, mensagem) => {
    cy.visit("/home")
    cy.get(campoEmail).type(email)
    cy.get(campoMensagem).type(mensagem)
    cy.get(btnEnviar).click()
})

Cypress.commands.add('preencherDuvidaSemEmail', (nome, mensagem) => {
    cy.visit("/home")
    cy.get(campoNome).type(nome)
    cy.get(campoMensagem).type(mensagem)
    cy.get(btnEnviar).click()
})

Cypress.commands.add('preencherDuvidaSemMensagem', (nome, email) => {
    cy.visit("/home")
    cy.get(campoNome).type(nome)
    cy.get(campoMensagem).type(email)
    cy.get(btnEnviar).click()
})

Cypress.commands.add('clicarBtnInscrever', () => {
    cy.visit("/home")
    cy.get(btnInscreva).click()
})

Cypress.commands.add('clicarBtnFooterHome', () => {
    cy.visit("/home")
    cy.get(btnFooterHome).click()
})

Cypress.commands.add('clicarBtnFooterNossaProposta', () => {
    cy.visit("/home")
    cy.get(btnFooterNossaProposta).click()
})

Cypress.commands.add('clicarBtnFooterComoFunciona', () => {
    cy.visit("/home")
    cy.get(btnFooterComoFunciona).click()
})

Cypress.commands.add('clicarBtnFooterContato', () => {
    cy.visit("/home")
    cy.get(btnFooterContato).click()
})

Cypress.commands.add('clicarBtnFooterLogin', () => {
    cy.visit("/home")
    cy.get(btnFooterContato).click()
})

Cypress.commands.add('clicarBtnFooterLinkedin', () => {
    cy.visit("/home")
    cy.get(btnFooterLinkedin).click()
})

Cypress.commands.add('clicarBtnFooterInstagram', () => {
    cy.visit("/home")
    cy.get(btnFooterInstagram).click()
})

Cypress.commands.add('clicarBtnFooterYoutube', () => {
    cy.visit("/home")
    cy.get(btnFooterYoutube).click()
})

Cypress.commands.add('clicarBtnFooterTwitter', () => {
    cy.visit("/home")
    cy.get(btnFooterTwitter).click()
})

Cypress.commands.add('clicarBtnFooterFacebook', () => {
    cy.visit("/home")
    cy.get(btnFooterFacebook).click()
})

Cypress.commands.add('clicarBtnMenu', () => {
    cy.visit("/home")
    cy.get(btnMenu).click()
})