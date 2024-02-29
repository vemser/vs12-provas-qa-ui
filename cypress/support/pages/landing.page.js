import { faker } from '@faker-js/faker';

// Botões do nav bar
let btnHome = '[data-testid="linkHomeHeader"]'
let btnSobre = '[data-testid="linkAboutHeader"]'
let btnComoFunciona = '[data-testid="linkHowWorksHeader"]'
let btnContato = '[data-testid="linkContactHeader"]'
let btnLogin = '[data-testid="linkLoginHeader"]'

// Botões do body
let btnConhecaDbcProvas = '[data-testid="linkHeroToProposal"]'
let btnConverseComNossaEquipe = '[data-testid="btnDataContact"]'
let btnSetaParaCima = '[data-testid="btnToTop"]'

// Textos do body
let txtComoFunciona = '#operation > h2'
let txtSobre = '#cardchoose > h2'

// Formulário Deixe uma mensagem
let campoNome = '[data-testid="inputNameContact"]'
let campoEmailMensagem = '[data-testid="inputEmailContact"]'
let campoMensagem = '[data-testid="inputMessageContact"]'
let btnEnviar = '[data-testid="btnSubmitContact"]'

// Login
let campoEmailLogin = '[data-testid="inputEmailLogin"]'
let campoSenha = '[data-testid="inputPasswordLogin"]'
let btnAcessar = '[data-testid="bntSubmitLogin"]'

Cypress.Commands.add('verificarBtnHeader', () => {
    
    cy.clicar(btnSobre)
    cy.get(txtSobre).should('be.visible')

    cy.clicar(btnSetaParaCima)
    cy.get(btnConhecaDbcProvas).should('be.visible')

    cy.clicar(btnComoFunciona)
    cy.get(txtComoFunciona).should('be.visible')

    cy.clicar(btnContato)
    cy.get(btnEnviar).should('be.visible')

    cy.clicar(btnHome)
    cy.get(btnConhecaDbcProvas).should('be.visible')
})

Cypress.Commands.add('preencherFormularioDeixeSuaMensagemComDadosValidos', () => {
    
    cy.clicar(btnContato)
    cy.get(btnEnviar).should('be.visible')
    cy.preencherCampo(campoNome, faker.person.firstName())
    cy.preencherCampo(campoEmailMensagem, faker.internet.email())
    cy.preencherCampo(campoMensagem, faker.lorem.paragraph())
})

Cypress.Commands.add('fazerLogin', () => {
    
    cy.clicar(btnLogin)
    cy.get(bntSubmitLogin).should('be.visible')
    cy.preencherCampo(campoEmailLogin, Cypress.env('LOGIN_ADMIN'))
    cy.preencherCampo(campoSenha, Cypress.env('SENHA_ADMIN'))
    cy.clicar(btnAcessar)
})