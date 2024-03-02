import { faker } from '@faker-js/faker';

// Textos
let tituloH2Empresa = '#root > section > main > header > h2'
let tituloH3Cadastros = '#root > section > main > section > h3:nth-child(1)'
let tituloH3Listagens = '#root > section > main > section > h3:nth-child(3)'

// Botões Cadastro
let btnColaboradorCadastro = '[aria-label="Colaborador"]'
let btnQuestoesCadastro ='[aria-label="Questões"]'
let btnProcessoSeletivoCadastro ='[aria-label="Processo Seletivo"]'

// Botões Listagem
let btnColaboradorListagem = '[aria-label="Colaboradores"]'

// Navbar Menu
let btnMenuEmpresas = '[href="/dashboard/empresa"]'

// Cadastro Colaborador Campos
let campoEmpresa = '[data-testid="inputFormEmpresa"]'
let campoNomeCompleto = '[data-testid="inputNomeUsuario"]'
let campoEmail = '[data-testid="inputEmailUsuario"]'
let campoCargo = '[data-testid="inputCargoUsuario"]'

// Cadastro Colaborador Botões
let btnCadastrar = '[data-testid="btnCadastrar"]'
let btnCancelar = '[data-testid="btnCancelar"]'

// Model Feedback
let modelFeedback = '.Toastify__toast-body > :nth-child(2)'
let txtModelFeedback = 'Sucesso'

Cypress.Commands.add('acessarCadastroDeColaboradorPeloMenuEmpresas', () => {
    cy.clicar(btnMenuEmpresas)
    cy.contains(tituloH2Empresa, 'Empresa')
    cy.clicar(btnColaboradorCadastro)
})

Cypress.Commands.add('cadastrarColaboradorComDadosValidos', () => {
    cy.lerArquivo("user.data.json").then((data) => {
        data = data.funcionario
        cy.selecionarOpcao(campoEmpresa, data.empresa)
        cy.preencherCampo(campoNomeCompleto, data.nomeCompleto)
        cy.preencherCampo(campoEmail, data.email)
        cy.selecionarOpcao(campoCargo, data.cargo)
    })
    cy.clicar(btnCadastrar)
    cy.wait(12000);
    cy.contains(modelFeedback, txtModelFeedback)
})
