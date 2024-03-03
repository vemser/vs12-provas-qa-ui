import { faker } from '@faker-js/faker';

// seção de cadastros
let btnQuestoesCadastros = '[data-tesid="btnQuestionRegister"]'
let btnProcessoSeletivo = '[data-tesid="btnProcessRegister"]'
let tituloH2Provas ='#root > section > main > header > h2'
let tituloH2CadastrarForm = '#root > section > main > form > h2'

// seção de listagens
let btnQuestoesListagens = '[data-tesid="btnQuestionList"]'

// Menu Provas
let btnProvas = '.sc-jeWJQQ > [href="/dashboard/provas"]'

// Cadastro Questão Campos
let campoTitulo = '[data-testid="inputtitulo"]'
let campoEnunciado = '[data-testid="inputenunciado"]'
let campoTema = '[data-testid="selectIdTemas"]'
let campoDificuldade = '[data-testid="selectdificuldade"]'
let campoAlternativa01 = '[data-testid="inputAlternativa1"]'
let campoAlternativa02 = '[data-testid="inputAlternativa2"]'
let campoAlternativa03 = '[data-testid="inputAlternativa3"]'

// Cadastro Questão Botões
let btnAdicionarAlternativa = '[data-testid="btnAdicionarAlternativa"]'
let btnCadastrar = '[data-testid="btnCadastrar"]'
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
        cy.preencherCampo(campoEnunciado, data.enunciado)
        cy.selecionarOpcao(campoTema, data.tema)
        cy.selecionarOpcao(campoDificuldade, data.dificuldade)
        cy.preencherCampo(campoAlternativa01, data.alternativa01)
        cy.preencherCampo(campoAlternativa02, data.alternativa02)
        cy.preencherCampo(campoAlternativa03, data.alternativa02)
        .clicar(`[for="radio-"${data.correta}]`)
    })
    cy.clicar(btnCadastrar)
})