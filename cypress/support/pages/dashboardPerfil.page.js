import { faker } from '@faker-js/faker';

// Menu Perfil
let btnMenuPerfil = '[href="/dashboard/perfil"]'

// Textos
let tituloH2Perfil = '#root > section > main > header > h2'

// seção configurações do perfil
let inputNomeCompleto = '#nome'
let inputEmail = '#email'
let inputSenha = '#senha'
let btnVisibilidadeSenha = '#root > section > main > section > form > div.sc-jfLZDZ.jvaXGU > div'
let btnEditar = '#btnEditar'
let btnCancelar = '#btnCancelar'

let popBtnResult = '#\\31  > div.Toastify__toast-body > div:nth-child(2)'
let txtPopFeedback = 'Informações alteradas com sucesso!'

Cypress.Commands.add('acessarConfiguracaoDoPerfilPeloMenuPerfil', () => {
    cy.clicar(btnMenuPerfil)
    cy.contains(tituloH2Perfil, 'Perfil')
})

Cypress.Commands.add('editarPerfilComDadosValidos', (usuario) => {

    cy.preencherCampo(inputNomeCompleto,faker.person.fullName())
    // usuario é o tipo de usuario que está logando podendo ser: ADMIN,GESTOR,MODERADOR e CANDIDATO
    cy.preencherCampo(inputEmail, Cypress.env(`LOGIN_${usuario}`))
    cy.preencherCampo(inputSenha, faker.internet.password())
    cy.clicar(btnEditar)
    cy.wait(8000);
    cy.contains(popBtnResult, txtPopFeedback)
})
