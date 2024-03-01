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
let modalConverseEspecialistas = '#modal-modal-title'
let txtmodalConverseEspecialistas = 'Converse com nosso especialistas!'

// Formulário Deixe uma mensagem
let campoNome = '[data-testid="inputNameContact"]'
let spanNomeContact = '#contact > form > span:nth-child(2)'
let campoEmailMensagem = '[data-testid="inputEmailContact"]'
let spanEmailContact = '#contact > form > span:nth-child(4)'
let campoMensagem = '[data-testid="inputMessageContact"]'
let spanMensagemContact = '#contact > form > span:nth-child(6)'
let btnEnviar = '[data-testid="btnSubmitContact"]'
let cardSucessoMensagem = '.Toastify__toast-body > :nth-child(2)'
let txtSucessoMensagem = 'Contato enviado com sucesso!'
let txtCampoObrigatorio = 'Campo Obrigatório'
let txtLetraParaTesteInvalido = 'a'



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
    cy.clicar(btnEnviar)
    cy.contains(cardSucessoMensagem, txtSucessoMensagem)

})

Cypress.Commands.add('enviarFormularioSemDados', () => {
    
    cy.clicar(btnContato)
    cy.clicar(btnEnviar)
    cy.contains(spanNomeContact, txtCampoObrigatorio)
    cy.contains(spanEmailContact, txtCampoObrigatorio)
    cy.contains(spanMensagemContact, txtCampoObrigatorio)

})

Cypress.Commands.add('enviarFormularioComDadosIncompletos', () => {
    
    cy.clicar(btnContato)
    cy.clicar(btnEnviar)
    cy.preencherCampo(campoNome, txtLetraParaTesteInvalido)
    cy.preencherCampo(campoEmailMensagem, txtLetraParaTesteInvalido)
    cy.preencherCampo(campoMensagem, txtLetraParaTesteInvalido)
    cy.contains(spanNomeContact, 'No mínimo 3 Caractéres')
    cy.contains(spanEmailContact, 'Precisa ser um Email válido')
    cy.contains(spanMensagemContact, 'Mínimo de 10 Caractéres')

})

Cypress.Commands.add('verificarBotaoConverseComNossaEquipe', () => {
    //TO-DO criar variaveis para os selectors
    cy.get('#tryit').scrollIntoView();
    cy.get('#tryit > div > div > button').should('be.visible')
    .clicar('#tryit > div > div > button')
    cy.contains(modalConverseEspecialistas, txtmodalConverseEspecialistas)
})


