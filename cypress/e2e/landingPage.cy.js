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

    it('CT-WEB-001.1.1 - Validar formulário "Ficou com dúvida? Deixe uma mensagem" sem dados', () => {
        cy.enviarFormularioSemDados()
    })

    it('CT-WEB-001.1.2 - Validar formulário "Ficou com dúvida? Deixe uma mensagem" com dados Incompletos', () => {
        cy.enviarFormularioComDadosIncompletos()
    })

    it.only('CT-WEB-001.2 - Clicar no botão "Converse com nossa equipe!" com sucesso', () => {
        cy.verificarBotaoConverseComNossaEquipe()
    })
    
})