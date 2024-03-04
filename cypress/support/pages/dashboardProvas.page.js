import { faker } from '@faker-js/faker';

// seção de cadastros
let btnQuestoesCadastros = '[data-testid="btnQuestionRegister"]'
let btnProcessoSeletivo = '[data-testid="btnProcessRegister"]'
let tituloH2Provas ='#root > section > main > header > h2'
let tituloH2CadastrarForm = '#root > section > main > form > h2'

// seção de listagens
let btnQuestoesListagens = '[data-testid="btnQuestionList"]'
let tituloH1Listagem = '#root > section > main > h1'
let primeiraQuestao = '#root > section > main > div.MuiPaper-root.MuiPaper-elevation.MuiPaper-rounded.MuiPaper-elevation1.MuiTableContainer-root.css-13xy2my > table > tbody > tr:nth-child(1) > th'

// Menu Provas
// let btnProvas = '.sc-jeWJQQ > [href="/dashboard/provas"]'
let btnProvas = '.sc-oASGG > [href="/vemser/vs12-provas-front/dashboard/provas"]'

// Cadastro Questão Campos
let campoTitulo = '[data-testid="inputTitleQuestion"]'
let campoEnunciado = '.ql-editor'
let campoTema = '[data-testid="selectThemeQuestions"]'
let campoDificuldade = '[data-testid="selectDificultQuestion"]'
let campoAlternativa01 = '[data-testid="inputAltQuestion1"]'
let campoAlternativa02 = '[data-testid="inputAltQuestion2"]'
let campoAlternativa03 = '[data-testid="inputAltQuestion3"]'

// Cadastro Questão Botões
let btnAdicionarAlternativa = '[data-testid="btnAddAltQuestion"]'
let btnCadastrar = '[data-testid="btnRegisterQuestion"]'
let btnCancelar = '[data-testid="btnCancelar"]'


Cypress.Commands.add('acessarCadastroDeQuestãoPeloMenuProvas', () => {
    
    cy.clicar(btnProvas)
    cy.contains(tituloH2Provas, 'Provas')
    cy.clicar(btnQuestoesCadastros)
    cy.contains(tituloH2CadastrarForm, 'Cadastrar Questões')
})

Cypress.Commands.add('cadastrarProvaComDadosValidos', () => {
    cy.lerArquivo("questao.data.json").then((data) => {
        data = data.questao
        cy.preencherCampo(campoTitulo, data.titulo)
        cy.wait(8000)
        cy.selecionarOpcao(campoTema, data.tema)
        cy.selecionarOpcao(campoDificuldade, data.dificuldade)
        cy.preencherCampo(campoEnunciado, data.enunciado)
        .clicar(btnAdicionarAlternativa)
        cy.preencherCampo(campoAlternativa01, data.alternativa01)
        cy.preencherCampo(campoAlternativa02, data.alternativa02)
        cy.preencherCampo(campoAlternativa03, data.alternativa02)
        .clicar(`:nth-child(${data.correta}) > label`)
    })
    cy.clicar(btnCadastrar)
})

Cypress.Commands.add('acessarListagemDeQuestãoPeloMenuProvas', () => {
    
    cy.clicar(btnProvas)
    cy.contains(tituloH2Provas, 'Provas')
    cy.clicar(btnQuestoesListagens)
    cy.contains(tituloH1Listagem, 'LISTA DE QUESTÕES')
    cy.wait(8000)
    cy.contains(primeiraQuestao, 'O que é Java?')
})

