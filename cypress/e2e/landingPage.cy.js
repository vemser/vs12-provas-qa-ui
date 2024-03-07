/// <reference types="cypress" />

describe('CT-WEB-01 - LandingPage', () => {

    beforeEach(() => {
        cy.visit("/")
    });

    it('CT-WEB-001.0 - Verificar todos os botões do Header', () => {
        cy.verificarBtnHeader()
    })

    it('CT-WEB-001.1.0 - Validar formulário "Ficou com dúvida? Deixe uma mensagem" com sucesso', () => {
        cy.preencherFormularioDeixeSuaMensagemComDadosValidos()
    })

    it('CT-WEB-001.1.1 - Validar formulário "Ficou com dúvida? Deixe uma mensagem" sem sucesso (sem dados)', () => {
        cy.enviarFormularioSemDados()
    })

    it('CT-WEB-001.1.2 - Validar formulário "Ficou com dúvida? Deixe uma mensagem" sem sucesso (com dados Incompletos)', () => {
        cy.enviarFormularioComDadosIncompletos()
    })

    it('CT-WEB-001.1.3 - Validar formulário "Ficou com dúvida? Deixe uma mensagem" sem sucesso (apenas com Nome)', () => {
        cy.preencherFormularioDeixeSuaMensagemApenasComNome()
    })

    it('CT-WEB-001.1.4 - Validar formulário "Ficou com dúvida? Deixe uma mensagem" sem sucesso (apenas com Email)', () => {
        cy.preencherFormularioDeixeSuaMensagemApenasComEmail()
    })

    it('CT-WEB-001.1.5 - Validar formulário "Ficou com dúvida? Deixe uma mensagem" sem sucesso (apenas com Mensagem)', () => {
        cy.preencherFormularioDeixeSuaMensagemApenasComMensagem()
    })

    it('CT-WEB-001.1.6 - Validar formulário "Ficou com dúvida? Deixe uma mensagem" sem sucesso (sem Nome)', () => {
        cy.preencherFormularioDeixeSuaMensagemSemNome()
    })
    
    it('CT-WEB-001.1.7 - Validar formulário "Ficou com dúvida? Deixe uma mensagem" sem sucesso (sem Email)', () => {
        cy.preencherFormularioDeixeSuaMensagemSemEmail()
    })

    it('CT-WEB-001.1.8 - Validar formulário "Ficou com dúvida? Deixe uma mensagem" sem sucesso (sem Mensagem)', () => {
        cy.preencherFormularioDeixeSuaMensagemSemMensagem()
    })

    it('CT-WEB-001.2 - Clicar no botão "Converse com nossa equipe!" com sucesso', () => {
        cy.verificarBotaoConverseComNossaEquipe()
    })

    it('CT-WEB-001.2.1 - Validar clicar no botão "Instagram" com sucesso', () => {
        cy.validarBotaoInstagram('https://www.instagram.com/')
    })

    it('CT-WEB-001.2.2 - Validar clicar no botão "Linkedin" com sucesso', () => {
        cy.validarBotaoLinkedin('https://www.linkedin.com/')
    })

    it('CT-WEB-001.2.3 - Validar clicar no botão "Youtube" com sucesso', () => {
        cy.validarBotaoYoutube('https://www.youtube.com/')
    })

    it('CT-WEB-001.2.4 - Validar clicar no botão "Twitter" com sucesso', () => {
        cy.validarBotaoTwitter('https://www.twitter.com/')
    })

    it('CT-WEB-001.2.5 - Validar clicar no botão "Facebook" com sucesso', () => {
        cy.validarBotaoFacebook('https://www.facebook.com/')
    })

    it('CT-WEB-001.2.6 - Validar formulário "Ficou com dúvida? Deixe uma mensagem" com sucesso mobile', () => {
        cy.viewport('iphone-6')
        cy.wait(2000)
        cy.preencherFormularioDeixeSuaMensagemComDadosValidosMobile()
    })

    it('CT-WEB-001.2.7 - Validar formulário "Ficou com dúvida? Deixe uma mensagem" sem sucesso (sem dados) mobile', () => {
        cy.viewport('iphone-6')
        cy.wait(2000)
        cy.enviarFormularioSemDadosMobile()
    })

    it('CT-WEB-001.2.8 - Validar formulário "Ficou com dúvida? Deixe uma mensagem" sem sucesso (com dados Incompletos) mobile', () => {
        cy.viewport('iphone-6')
        cy.wait(2000)
        cy.enviarFormularioComDadosIncompletosMobile()
    })

    it('CT-WEB-001.3.0 - Validar formulário "Ficou com dúvida? Deixe uma mensagem" sem sucesso (apenas com Nome) mobile', () => {
        cy.viewport('iphone-6')
        cy.wait(2000)
        cy.preencherFormularioDeixeSuaMensagemApenasComNomeMobile()
    })

    it('CT-WEB-001.3.1 - Validar formulário "Ficou com dúvida? Deixe uma mensagem" sem sucesso (apenas com Email) mobile', () => {
        cy.viewport('iphone-6')
        cy.wait(2000)
        cy.preencherFormularioDeixeSuaMensagemApenasComEmailMobile()
    })

    it('CT-WEB-001.3.2 - Validar formulário "Ficou com dúvida? Deixe uma mensagem" sem sucesso (apenas com Mensagem) mobile', () => {
        cy.viewport('iphone-6')
        cy.wait(2000)
        cy.preencherFormularioDeixeSuaMensagemApenasComMensagemMobile()
    })

    it('CT-WEB-001.3.3 - Validar formulário "Ficou com dúvida? Deixe uma mensagem" sem sucesso (sem Nome) mobile', () => {
        cy.viewport('iphone-6')
        cy.wait(2000)
        cy.preencherFormularioDeixeSuaMensagemSemNomeMobile()
    })
    
    it('CT-WEB-001.3.4 - Validar formulário "Ficou com dúvida? Deixe uma mensagem" sem sucesso (sem Email) mobile', () => {
        cy.viewport('iphone-6')
        cy.wait(2000)
        cy.preencherFormularioDeixeSuaMensagemSemEmailMobile()
    })

    it('CT-WEB-001.3.5 - Validar formulário "Ficou com dúvida? Deixe uma mensagem" sem sucesso (sem Mensagem) mobile', () => {
        cy.viewport('iphone-6')
        cy.wait(2000)
        cy.preencherFormularioDeixeSuaMensagemSemMensagemMobile()
    })

    it('CT-WEB-001.3.6 - Clicar no botão "Converse com nossa equipe!" com sucesso mobile', () => {
        cy.viewport('iphone-6')
        cy.wait(2000)
        cy.verificarBotaoConverseComNossaEquipe()
    })

    it('CT-WEB-001.3.7 - Validar clicar no botão "Instagram" com sucesso mobile', () => {
        cy.viewport('iphone-6')
        cy.wait(2000)
        cy.validarBotaoInstagram('https://www.instagram.com/')
    })

    it('CT-WEB-001.3.8 - Validar clicar no botão "Linkedin" com sucesso mobile', () => {
        cy.viewport('iphone-6')
        cy.wait(2000)
        cy.validarBotaoLinkedin('https://www.linkedin.com/')
    })

    it('CT-WEB-001.3.9 - Validar clicar no botão "Youtube" com sucesso mobile', () => {
        cy.viewport('iphone-6')
        cy.wait(2000)
        cy.validarBotaoYoutube('https://www.youtube.com/')
    })

    it('CT-WEB-001.4.0 - Validar clicar no botão "Twitter" com sucesso mobile', () => {
        cy.viewport('iphone-6')
        cy.wait(2000)
        cy.validarBotaoTwitter('https://www.twitter.com/')
    })

    it('CT-WEB-001.4.1 - Validar clicar no botão "Facebook" com sucesso mobile', () => {
        cy.viewport('iphone-6')
        cy.wait(2000)
        cy.validarBotaoFacebook('https://www.facebook.com/')
    })

    it('CT-WEB-001.4.2 - Validar menu hamburguer mobile com sucesso', () => {
        cy.visit('/')
        cy.validarMenuHamburguer()
    })

})