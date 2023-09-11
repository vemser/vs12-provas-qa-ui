/// <reference types="cypress" />
import "../support/commands"

let elementoSobre = '.desktop-links > :nth-child(2) > a'
let elementoComoFunciona = '.sc-iJfdHH'
let elementoContato = '.sc-pqitP'
let elementoConhecaJa = '.sc-dmBjiZ > .sc-kDnyCx'
let toastifyConfirmacao = '#\\31 '
let nomeObrigatorio = '.sc-ftLKQv > :nth-child(2)'
let emailObrigatorio1 = '.sc-ftLKQv > :nth-child(4)'
let emailObrigatorio2 = '.sc-ftLKQv > :nth-child(3)'
let mensagemObrigatorio1 = '.sc-ftLKQv > :nth-child(6)'
let mensagemObrigatorio2 = '.sc-ftLKQv > :nth-child(4)'
let titutoModalConverse = '#modal-modal-title'

describe('Tela de Landing Page', () => {
    
    beforeEach(() => {
        cy.visit("/")
    });

    it('CT-WEB-008.1 - Validar botão "Login" com sucesso', () => {
        cy.clicarBtnLoginNavbar()
        cy.url().should('contain', '/login')
    })

    it('CT-WEB-009.1 - Validar botão "Sobre" com sucesso', () => {
        cy.clicarBtnSobreNavbar()
        cy.get(elementoSobre).should('be.visible')
    })

    it('CT-WEB-010.1 - Validar botão "Como Funciona" com sucesso', () => {
        cy.clicarBtnComoFuncionaNavbar()
        cy.get(elementoComoFunciona).should('be.visible')
    })

    it('CT-WEB-011.1 - Validar botão "Contato" com sucesso', () => {
        cy.clicarBtnContatoNavbar()
        cy.get(elementoContato).should('be.visible')
    })

    it('CT-WEB-012.1 - Validar botão "Conheça Já" com sucesso', () => {
        cy.clicarBtnConhecaJa()
        cy.get(elementoConhecaJa).should('be.visible')
    })

    it('CT-WEB-013.1 - Validar formulário "Ficou com dúvida? Deixe uma mensagem" com sucesso', () => {
        cy.fixture('landingPage.data.json').then(data => {
            cy.preencherDuvidaCompleto(data.duvida[0].nome, data.duvida[0].email, data.duvida[0].mensagem)
            cy.get(toastifyConfirmacao).should('contain', "Contato enviado com sucesso!")
        })
    })

    it('CT-WEB-013.2 - Validar formulário "Ficou com dúvida? Deixe uma mensagem" sem sucesso (todos os campos em branco)', () => {
        cy.preencherDuvidaVazio()
        cy.get(nomeObrigatorio).should('contain',"Campo Obrigatório")
        cy.get(emailObrigatorio1).should('contain',"Campo Obrigatório")
        cy.get(mensagemObrigatorio1).should('contain',"Campo Obrigatório")
    })

    it('CT-WEB-013.3 - Validar formulário "Ficou com dúvida? Deixe uma mensagem" sem sucesso (Campo Nome vazio)', () => {
        cy.fixture('landingPage.data.json').then(data => {
            cy.preencherDuvidaSemNome(data.duvida[0].email, data.duvida[0].mensagem)
            cy.get(nomeObrigatorio).should('contain',"Campo Obrigatório")
        })
    })

    it('CT-WEB-013.4 - Validar formulário "Ficou com dúvida? Deixe uma mensagem" sem sucesso (Campo Email vazio)', () => {
        cy.fixture('landingPage.data.json').then(data => {
            cy.preencherDuvidaSemEmail(data.duvida[0].nome, data.duvida[0].mensagem)
            cy.get(emailObrigatorio2).should('contain',"Campo Obrigatório")
        })
    })

    it('CT-WEB-013.5 - Validar formulário "Ficou com dúvida? Deixe uma mensagem" sem sucesso (Campo Mensagem vazio)', () => {
        cy.fixture('landingPage.data.json').then(data => {
            cy.preencherDuvidaSemMensagem(data.duvida[0].nome, data.duvida[0].email)
            cy.get(mensagemObrigatorio2).should('contain',"Campo Obrigatório")
        })
    })

    it('CT-WEB-014.1 - Validar botão "Linkedin" com sucesso', () => {
        cy.clicarBtnFooterLinkedin()
        cy.url().should('contain', 'linkedin.com')
    })

    it('CT-WEB-015.1 - Validar botão "Instagram" com sucesso', () => {
        cy.clicarBtnFooterInstagram()
        cy.url().should('contain', 'instagram.com')
    })

    it('CT-WEB-016.1 - Validar botão "Youtube" com sucesso', () => {
        cy.clicarBtnFooterInstagram()
        cy.url().should('contain', 'youtube.com')
    })

    
    it('CT-WEB-017.1 - Validar botão "Twitter" com sucesso', () => {
        cy.clicarBtnFooterTwitter()
        cy.url().should('contain', 'twitter.com')
    })

    
    it('CT-WEB-018.1 - Validar botão "Facebook" com sucesso', () => {
        cy.clicarBtnFooterFacebook()
        cy.url().should('contain', 'facebook.com')
    })
    
    it('CT-WEB-019.1 - Validar botão "Converse com nossa equipe" com sucesso', () => {
        cy.clicarBtnConverseEquipe()
        cy.get(titutoModalConverse).should('be.visible')
    })
})