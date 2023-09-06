/// <reference types="cypress" />

let textTela = 'SELETOR'
let textMensagemAoUsuario = 'SELETOR'
let telaFormulario = 'SELETOR'
let campoEmail = 'SELETOR'
let btnFacaSeuCadastro = 'SELETOR'
let btnLogo = 'SELETOR'


describe('Efetuar Login', () => {

    beforeEach(() => {
        cy.visit("/login")
        cy.gerarDadosDinamicos()
    });

    it('CT01 - Validar Login Administrador Geral com sucesso', () => {
        cy.fixture('login.data.json').then(data => {
            cy.efetuarLogin(data.admGeral.email, data.admGeral.senha)
        })
    })

})