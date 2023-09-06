/// <reference types="cypress" />

describe('Tela de Landing Page', () => {
    
    beforeEach(() => {
        cy.visit("/home")
    });

    it('CT-WEB-008.1 - Validar botão "Home" com sucesso', () => {
        cy.clicarBtnHomeNavbar()
    })

    it('CT-WEB-009.1 - Validar botão "Nossa Proposta" com sucesso', () => {
        cy.clicarBtnNossaPropostaNavbar()
    })

    it('CT-WEB-010.1 - Validar botão "Como Funciona" com sucesso', () => {
        cy.clicarBtnComoFuncionaNavbar()
    })

    it('CT-WEB-011.1 - Validar botão "Contato" com sucesso', () => {
        cy.clicarBtnContatoNavbar()
    })

    it('CT-WEB-012.1 - Validar botão "Conheça Já" com sucesso', () => {
        cy.clicarBtnConhecaJa()
    })

    it('CT-WEB-013.1 - Validar formulário "Ficou com dúvida? Deixe uma mensagem" com sucesso', () => {
        cy.fixture('landingPage.data.json').then(data => {
            cy.preencherDuvidaCompleto(data.duvida.nome, data.duvida.email, data.duvida.mensagem)
        })
    })

    it('CT-WEB-013.2 - Validar formulário "Ficou com dúvida? Deixe uma mensagem" sem sucesso (todos os campos em branco)', () => {
        cy.preencherDuvidaCompleto()
    })

    it('CT-WEB-013.3 - Validar formulário "Ficou com dúvida? Deixe uma mensagem" sem sucesso (Campo Nome vazio)', () => {
        cy.fixture('landingPage.data.json').then(data => {
            cy.preencherDuvidaSemNome(data.duvida.email, data.duvida.mensagem)
        })
    })

    it('CT-WEB-013.4 - Validar formulário "Ficou com dúvida? Deixe uma mensagem" sem sucesso (Campo Email vazio)', () => {
        cy.fixture('landingPage.data.json').then(data => {
            cy.preencherDuvidaSemEmail(data.duvida.nome, data.duvida.mensagem)
        })
    })

    it('CT-WEB-013.5 - Validar formulário "Ficou com dúvida? Deixe uma mensagem" sem sucesso (Campo Mensagem vazio)', () => {
        cy.fixture('landingPage.data.json').then(data => {
            cy.preencherDuvidaSemMensagem(data.duvida.nome, data.duvida.email)
        })
    })

    it('CT-WEB-014.1 - Validar botão "Linkedin" com sucesso', () => {
        cy.clicarBtnFooterLinkedin()
    })

    it('CT-WEB-015.1 - Validar botão "Instagram" com sucesso', () => {
        cy.clicarBtnFooterInstagram()
    })

    it('CT-WEB-016.1 - Validar botão "Youtube" com sucesso', () => {
        cy.clicarBtnFooterInstagram()
    })

    
    it('CT-WEB-017.1 - Validar botão "Twitter" com sucesso', () => {
        cy.clicarBtnFooterTwitter()
    })

    
    it('CT-WEB-018.1 - Validar botão "Facebook" com sucesso', () => {
        cy.clicarBtnFooterFacebook()
    })

    
    it('CT-WEB-019.1 - Validar botão "Inscreva-se" com sucesso', () => {
        cy.clicarBtnInscrever()
    })

})