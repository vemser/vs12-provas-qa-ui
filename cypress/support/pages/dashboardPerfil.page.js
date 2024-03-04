import { faker } from '@faker-js/faker';

// Menu Perfil
let btnMenuPerfil = '[href="/vemser/vs12-provas-front/dashboard/perfil"]'

// Textos
let tituloH2Perfil = '#root > section > main > header > h2'

// seção configurações do perfil
let inputNomeCompleto = '[data-testid="inputEditUserName"]'
let inputEmail = '[data-testid="inputEditUserEmail"]'
let inputSenha = '[data-testid="inputEditUserPassword"]'
let btnVisibilidadeSenha = '[data-testid="eye-icon"]'
let btnEditar = '[data-testid="btnSubmitEditUser"]'
let btnCancelar = '[data-testid="btnCancelEditUser"]'

let popBtnResult = '#\\31  > div.Toastify__toast-body > div:nth-child(2)'
let txtPopFeedback = 'Informações alteradas com sucesso!'

Cypress.Commands.add('acessarConfiguracaoDoPerfilPeloMenuPerfil', () => {
    cy.clicar(btnMenuPerfil)
    cy.contains(tituloH2Perfil, 'Perfil')
})

Cypress.Commands.add('editarPerfilComDadosValidos', (usuario) => {

    cy.preencherCampo(inputNomeCompleto, faker.person.fullName())
    cy.preencherCampo(inputSenha, faker.internet.password())
    cy.clicar(btnEditar)
    cy.contains(popBtnResult, txtPopFeedback)
    cy.preencherCampo(inputNomeCompleto, usuario)
    cy.preencherCampo(inputEmail, Cypress.env(`LOGIN_${usuario}`))
    cy.preencherCampo(inputSenha, Cypress.env(`SENHA_${usuario}`))
    cy.clicar(btnEditar)
})
