// Mapeamento
let btnHome = '.desktop-links > :nth-child(1) > a'
let btnSobre = '.desktop-links > :nth-child(2) > a'
let btnComoFunciona = '.desktop-links > :nth-child(3) > a'
let btnContato = '.desktop-links > :nth-child(4) > a'
let btnLogin = '.desktop-links > :nth-child(5) > a'
let btnConhecaJa = '.sc-dmBjiZ > .sc-kDnyCx'
let campoNome = ':nth-child(1) > .MuiInputBase-root > #custom-css-outlined-input'
let campoEmail = ':nth-child(2) > .MuiInputBase-root > #custom-css-outlined-input'
let campoMensagem = ':nth-child(3) > .MuiInputBase-root > #custom-css-outlined-input'
let btnEnviar = '.sc-jrkPcm > .sc-kDnyCx'
let btnFooterHome = '.sc-csmVar > :nth-child(1)'
let btnFooterNossaProposta = '.sc-csmVar > :nth-child(1)'
let btnConverseEquipe = '.sc-iAfmwU > .sc-kDnyCx'
let btnFooterComoFunciona = '.sc-csmVar > :nth-child(3)'
let btnFooterContato = '.sc-csmVar > :nth-child(4)'
let btnFooterLogin = '.sc-csmVar > :nth-child(5)'
let btnFooterLinkedin = '[data-testid="LinkedInIcon"] > path'
let btnFooterInstagram = '[data-testid="InstagramIcon"] > path'
let btnFooterYoutube = '[data-testid="YouTubeIcon"] > path'
let btnFooterTwitter = '[data-testid="TwitterIcon"] > path'
let btnFooterFacebook = '[data-testid="FacebookIcon"] > path'

// Ações
Cypress.Commands.add('clicarBtnHomeNavbar', () => {
    cy.get(btnHome).click()
})

Cypress.Commands.add('clicarBtnSobreNavbar', () => {
    cy.get(btnSobre).click()
})

Cypress.Commands.add('clicarBtnComoFuncionaNavbar', () => {
    cy.get(btnComoFunciona).click()
})

Cypress.Commands.add('clicarBtnContatoNavbar', () => {
    cy.get(btnContato).click()
})

Cypress.Commands.add('clicarBtnLoginNavbar', () => {
    cy.get(btnLogin).click()
})

Cypress.Commands.add('clicarBtnConhecaJa', () => {
    cy.get(btnConhecaJa).click({force: true})
})

Cypress.Commands.add('preencherDuvidaCompleto', (nome, email, mensagem) => {
    cy.get(campoNome).type(nome, {force: true})
    cy.get(campoEmail).type(email, {force: true})
    cy.get(campoMensagem).type(mensagem, {force: true})
    cy.get(btnEnviar).click({force: true})
})

Cypress.Commands.add('preencherDuvidaVazio', () => {
    cy.get(btnEnviar).click({force: true})
})

Cypress.Commands.add('preencherDuvidaSemNome', (email, mensagem) => {
    cy.get(campoEmail).type(email, {force: true})
    cy.get(campoMensagem).type(mensagem, {force: true})
    cy.get(btnEnviar).click({force: true})
})

Cypress.Commands.add('preencherDuvidaSemEmail', (nome, mensagem) => {
    cy.get(campoNome).type(nome, {force: true})
    cy.get(campoMensagem).type(mensagem, {force: true})
    cy.get(btnEnviar).click({force: true})
})

Cypress.Commands.add('preencherDuvidaSemMensagem', (nome, email) => {
    cy.get(campoNome).type(nome, {force: true})
    cy.get(campoEmail).type(email, {force: true})
    cy.get(btnEnviar).click({force: true})
})

Cypress.Commands.add('clicarBtnConverseEquipe', () => {
    cy.get(btnConverseEquipe).click()
})

Cypress.Commands.add('clicarBtnFooterHome', () => {
    cy.get(btnFooterHome).click()
})

Cypress.Commands.add('clicarBtnFooterNossaProposta', () => {
    cy.get(btnFooterNossaProposta).click()
})

Cypress.Commands.add('clicarBtnFooterComoFunciona', () => {
    cy.get(btnFooterComoFunciona).click()
})

Cypress.Commands.add('clicarBtnFooterContato', () => {
    cy.get(btnFooterContato).click()
})

Cypress.Commands.add('clicarBtnFooterLogin', () => {
    cy.get(btnFooterContato).click()
})

Cypress.Commands.add('clicarBtnFooterLinkedin', () => {
    cy.get(btnFooterLinkedin).click({force: true})
})

Cypress.Commands.add('clicarBtnFooterInstagram', () => {
    cy.get(btnFooterInstagram).click({force: true})
})

Cypress.Commands.add('clicarBtnFooterYoutube', () => {
    cy.get(btnFooterYoutube).click({force: true})
})

Cypress.Commands.add('clicarBtnFooterTwitter', () => {
    cy.get(btnFooterTwitter).click({force: true})
})

Cypress.Commands.add('clicarBtnFooterFacebook', () => {
    cy.get(btnFooterFacebook).click({force: true})
})

Cypress.Commands.add('clicarBtnMenu', () => {
    cy.get(btnMenu).click()
})