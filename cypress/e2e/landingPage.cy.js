/// <reference types="cypress" />

describe('landingPage', () => {

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
    
})