import { faker, ur } from '@faker-js/faker';

// Botões do nav bar
let btnHome = '[data-testid="linkHomeHeader"]'
let btnSobre = '[data-testid="linkAboutHeader"]'
let btnComoFunciona = '[data-testid="linkHowWorksHeader"]'
let btnContato = '[data-testid="linkContactHeader"]'
let btnLogin = '[data-testid="linkLoginHeader"]'
let btnHomeMobile = '#root > div > header > div > button > svg'
let btnSobreMobile = 'body > div.MuiDrawer-root.MuiDrawer-modal.MuiModal-root.css-y28f86 > div.MuiPaper-root.MuiPaper-elevation.MuiPaper-elevation16.MuiDrawer-paper.MuiDrawer-paperAnchorRight.css-1ab2xsx > ul > li:nth-child(3) > p > a'
let btnComoFuncionaMobile = 'body > div.MuiDrawer-root.MuiDrawer-modal.MuiModal-root.css-y28f86 > div.MuiPaper-root.MuiPaper-elevation.MuiPaper-elevation16.MuiDrawer-paper.MuiDrawer-paperAnchorRight.css-1ab2xsx > ul > li:nth-child(4) > p > a'
let btnContatoMobile = 'body > div.MuiDrawer-root.MuiDrawer-modal.MuiModal-root.css-y28f86 > div.MuiPaper-root.MuiPaper-elevation.MuiPaper-elevation16.MuiDrawer-paper.MuiDrawer-paperAnchorRight.css-1ab2xsx > ul > li:nth-child(5) > p > a'
let btnLoginMobile = 'body > div.MuiDrawer-root.MuiDrawer-modal.MuiModal-root.css-y28f86 > div.MuiPaper-root.MuiPaper-elevation.MuiPaper-elevation16.MuiDrawer-paper.MuiDrawer-paperAnchorRight.css-1ab2xsx > ul > li:nth-child(5) > p > a'

// Botões do footer
let btnLinkedin = '[data-testid="LinkedInIcon"]'
let btnInstagram = '[data-testid="InstagramIcon"]'
let btnYoutube = '[data-testid="YouTubeIcon"]'
let btnTwitter = '[data-testid="TwitterIcon"]'
let btnFacebook = '[data-testid="FacebookIcon"]'

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

Cypress.Commands.add('verificarBtnHeaderMobile', () => {
    
    cy.validarMenuHamburguer()
    cy.wait(2000)
    cy.clicar(btnSobreMobile)
    cy.get(txtSobre).should('be.visible')

    cy.validarMenuHamburguer()
    cy.wait(2000)
    cy.clicar(btnComoFuncionaMobile)
    cy.get(txtComoFunciona).should('be.visible')

    cy.validarMenuHamburguer()
    cy.wait(2000)
    cy.clicar(btnContatoMobile)
    cy.get(btnEnviar).should('be.visible')
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

Cypress.Commands.add('preencherFormularioDeixeSuaMensagemComDadosValidosMobile', () => {

    cy.clicar(btnHomeMobile)
    cy.clicar(btnContatoMobile)
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

Cypress.Commands.add('preencherFormularioDeixeSuaMensagemApenasComNomeMobile', () => {
    
    cy.clicar(btnHomeMobile)
    cy.clicar(btnContatoMobile)
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

Cypress.Commands.add('preencherFormularioDeixeSuaMensagemApenasComEmailMobile', () => {
    
    cy.clicar(btnHomeMobile)
    cy.clicar(btnContatoMobile)
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

Cypress.Commands.add('preencherFormularioDeixeSuaMensagemApenasComMensagemMobile', () => {
    
    cy.clicar(btnHomeMobile)
    cy.clicar(btnContatoMobile)
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

Cypress.Commands.add('preencherFormularioDeixeSuaMensagemSemNomeMobile', () => {
    
    cy.clicar(btnHomeMobile)
    cy.clicar(btnContatoMobile)
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

Cypress.Commands.add('preencherFormularioDeixeSuaMensagemSemEmailMobile', () => {
    
    cy.clicar(btnHomeMobile)
    cy.clicar(btnContatoMobile)
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

Cypress.Commands.add('preencherFormularioDeixeSuaMensagemSemMensagemMobile', () => {
    
    cy.clicar(btnHomeMobile)
    cy.clicar(btnContatoMobile)
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

Cypress.Commands.add('enviarFormularioSemDadosMobile', () => {
    
    cy.clicar(btnHomeMobile)
    cy.clicar(btnContatoMobile)
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

Cypress.Commands.add('enviarFormularioComDadosIncompletosMobile', () => {
    
    cy.clicar(btnHomeMobile)
    cy.clicar(btnContatoMobile)
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

Cypress.Commands.add('validarBotaoInstagram', (url) => {
    cy.wait(2000)
    cy.get('#footer > div:nth-child(2) > div.sc-ksJisA.knOOzS > button:nth-child(2) > a').invoke('attr', 'href').then(href => {
        expect(href).to.equal(url);
      });
})

Cypress.Commands.add('validarBotaoLinkedin', (url) => {
    cy.get('#footer > div:nth-child(2) > div.sc-ksJisA.knOOzS > button:nth-child(1) > a')
    .invoke("removeAttr", "target").click({ force: true });
    cy.url().should('eq', url)
})

Cypress.Commands.add('validarBotaoYoutube', (url) => {
    cy.visit('/')
     cy.get('#footer > div:nth-child(2) > div.sc-ksJisA.knOOzS > button:nth-child(3) > a').invoke('attr', 'href').then(href => {
        expect(href).to.equal(url);
      });
})

Cypress.Commands.add('validarBotaoTwitter', (url) => {
    cy.get('#footer > div:nth-child(2) > div.sc-ksJisA.knOOzS > button:nth-child(4) > a').invoke('attr', 'href').then(href => {
        expect(href).to.equal(url);
      });
})

Cypress.Commands.add('validarBotaoFacebook', (url) => {
    cy.get('#footer > div:nth-child(2) > div.sc-ksJisA.knOOzS > button:nth-child(5) > a')
    .invoke("removeAttr", "target").click({ force: true });
    cy.url().should('eq', url)
})

Cypress.Commands.add('validarMenuHamburguer', () => {
    cy.viewport('iphone-6')
    cy.wait(2000)
    cy.clicar('#root > div > header > div > button')
})