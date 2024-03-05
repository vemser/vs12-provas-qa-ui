import { faker } from '@faker-js/faker';

// Botões do nav bar
let btnHome = '[data-testid="linkHomeHeader"]'
let btnSobre = '[data-testid="linkAboutHeader"]'
let btnComoFunciona = '[data-testid="linkHowWorksHeader"]'
let btnContato = '[data-testid="linkContactHeader"]'
let btnLogin = '[data-testid="linkLoginHeader"]'

// Botões do body
let btnConhecaDbcProvas = '[data-testid="linkHeroToProposal"]'
let btnConverseComNossaEquipe = '#tryit > div > div > button'
let btnSetaParaCima = '[data-testid="btnToTop"]'

// Textos do body
let txtComoFunciona = '#operation > h2'
let txtSobre = '#cardchoose > h2'
let modalConverseEspecialistas = '#modal-modal-title'
let txtmodalConverseEspecialistas = 'Converse com nosso especialistas!'
let sectionTryIt = '#tryit'

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

Cypress.Commands.add('preencherFormularioDeixeSuaMensagemApenasComNome', () => {
    
    cy.clicar(btnContato)
    cy.get(btnEnviar).should('be.visible')
    cy.preencherCampo(campoNome, faker.person.firstName())
    cy.clicar(btnEnviar)
    cy.contains('#contact > form > span:nth-child(3)', txtCampoObrigatorio)
    cy.contains('#contact > form > span:nth-child(5)', txtCampoObrigatorio)

})

Cypress.Commands.add('preencherFormularioDeixeSuaMensagemApenasComEmail', () => {
    
    cy.clicar(btnContato)
    cy.get(btnEnviar).should('be.visible')
    cy.preencherCampo(campoEmailMensagem, faker.internet.email())
    cy.clicar(btnEnviar)
    cy.contains('#contact > form > span:nth-child(2)', txtCampoObrigatorio)
    cy.contains('#contact > form > span:nth-child(5)', txtCampoObrigatorio)

})

Cypress.Commands.add('preencherFormularioDeixeSuaMensagemApenasComMensagem', () => {
    
    cy.clicar(btnContato)
    cy.preencherCampo(campoMensagem, faker.lorem.paragraph())
    cy.clicar(btnEnviar)
    cy.contains(spanNomeContact, txtCampoObrigatorio)
    cy.contains(spanEmailContact, txtCampoObrigatorio)

})

Cypress.Commands.add('preencherFormularioDeixeSuaMensagemSemNome', () => {
    
    cy.clicar(btnContato)
    cy.preencherCampo(campoEmailMensagem, faker.internet.email())
    cy.preencherCampo(campoMensagem, faker.lorem.paragraph())
    cy.clicar(btnEnviar)
    cy.contains('#contact > form > span', txtCampoObrigatorio)

})

Cypress.Commands.add('preencherFormularioDeixeSuaMensagemSemEmail', () => {
    
    cy.clicar(btnContato)
    cy.preencherCampo(campoNome, faker.person.firstName())
    cy.preencherCampo(campoMensagem, faker.lorem.paragraph())
    cy.clicar(btnEnviar)
    cy.contains('#contact > form > span', txtCampoObrigatorio)

})

Cypress.Commands.add('preencherFormularioDeixeSuaMensagemSemMensagem', () => {
    
    cy.clicar(btnContato)
    cy.preencherCampo(campoNome, faker.person.firstName())
    cy.preencherCampo(campoEmailMensagem, faker.internet.email())
    cy.clicar(btnEnviar)
    cy.contains('#contact > form > span', txtCampoObrigatorio)

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
    cy.contains(spanMensagemContact, 'Mínimo de 10 caracteres')

})

Cypress.Commands.add('verificarBotaoConverseComNossaEquipe', () => {
    //TO-DO criar variaveis para os selectors
    cy.get(sectionTryIt).scrollIntoView();
    cy.get(btnConverseComNossaEquipe).should('be.visible')
    .clicar(btnConverseComNossaEquipe)
    cy.contains(modalConverseEspecialistas, txtmodalConverseEspecialistas)
})


