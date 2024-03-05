import { faker } from '@faker-js/faker';

// seção de cadastros
let btnQuestoesCadastros = '[data-testid="btnQuestionRegister"]'
let btnProcessoSeletivo = '[data-testid="btnProcessRegister"]'
let tituloH2Provas ='#root > section > main > header > h2'
let tituloH2CadastrarForm = '#root > section > main > form > h2'

// seção de listagens
let btnQuestoesListagens = '[data-testid="btnQuestionList"]'
let tituloH1Listagem = '#root > section > main > h1'
let primeiraQuestao = '#root > section > main > div.MuiPaper-root.MuiPaper-elevation.MuiPaper-rounded.MuiPaper-elevation1.MuiTableContainer-root.css-13xy2my > table > tbody > tr:nth-child(1) > td:nth-child(3)'

// Menu Provas
// let btnProvas = '.sc-jeWJQQ > [href="/dashboard/provas"]'
let btnProvas = '.sc-oASGG > [href="/vemser/vs12-provas-front/dashboard/provas"]'

// Cadastro Questão Campos
let campoTitulo = '[data-testid="inputTitleQuestion"]'
let campoTema = '[data-testid="selectThemeQuestions"]'
let btnAdicionarTema = '#root > section > main > form > div.sc-khksUn.sc-hTJqdO.foxlTA.cSYAZP > button'
let campoEnunciado = '#root > section > main > form > div.sc-knwvCr.dFovCS > div > div.p-editor-content.ql-container.ql-snow > div.ql-editor.ql-blank'
let campoDificuldade = '[data-testid="selectDificultQuestion"]'
let campoTipoDeQuestao = '[data-testid="selectQuestionType"]'
let campoAlternativa01 = '[data-testid="inputAltQuestion1"]'
let campoAlternativa02 = '[data-testid="inputAltQuestion2"]'
let campoAlternativa03 = '[data-testid="inputAltQuestion3"]'

// Cadastro Questão Botões
let btnAdicionarAlternativa = '[data-testid="btnAddAltQuestion"]'
let btnCadastrar = '[data-testid="btnRegisterQuestion"]'
let btnCancelar = '[data-testid="btnCancelar"]'

let spanTituloInvalido = '#root > section > main > form > p:nth-child(5)'
let spanDificuldadeInvalida = '#root > section > main > form > p:nth-child(12)'
let spanEnunciadoInvalido = '#root > section > main > form > p:nth-child(15)'

let msgmCampoObrigatorio = 'CAMPO OBRIGATÓRIO'

Cypress.Commands.add('acessarCadastroDeQuestãoPeloMenuProvas', () => {
    
    cy.clicar(btnProvas)
    cy.contains(tituloH2Provas, 'Provas')
    cy.clicar(btnQuestoesCadastros)
    cy.contains(tituloH2CadastrarForm, 'Cadastrar Questões')
})

Cypress.Commands.add('cadastrarProvaObjetivaComDadosValidos', () => {
    cy.lerArquivo("questao.data.json").then((data) => {
        data = data.questao
        cy.preencherCampo(campoTitulo, data.titulo)
        cy.wait(5000)
        cy.selecionarOpcao(campoTema, data.tema01)
        cy.clicar(btnAdicionarTema)
        cy.selecionarOpcao(campoTema, data.tema02)
        cy.clicar(btnAdicionarTema)
        cy.selecionarOpcao(campoTema, data.tema03)
        cy.clicar(btnAdicionarTema)
        cy.preencherCampo(campoEnunciado, data.enunciado)
        cy.selecionarOpcao(campoDificuldade, data.dificuldade)
        cy.selecionarOpcao(campoTipoDeQuestao, "OBJETIVA")
        .clicar(btnAdicionarAlternativa)
        cy.preencherCampo(campoAlternativa01, data.alternativa01)
        cy.preencherCampo(campoAlternativa02, data.alternativa02)
        cy.preencherCampo(campoAlternativa03, data.alternativa02)
        .clicar(`#root > section > main > form > div.sc-lbNsEr.ftMHqp > div:nth-child(${data.correta}) > label`)
    })
    cy.clicar(btnCadastrar)
})

Cypress.Commands.add('acessarListagemDeQuestãoPeloMenuProvas', () => {
    
    cy.clicar(btnProvas)
    cy.contains(tituloH2Provas, 'Provas')
    cy.clicar(btnQuestoesListagens)
    cy.contains(tituloH1Listagem, 'Lista de Questões')
    cy.wait(8000)
    cy.contains(primeiraQuestao, 'FACIL')
})

Cypress.Commands.add('tentarCadastrarProvaComTituloInvalido', () => {
    cy.lerArquivo("questao.data.json").then((data) => {
        data = data.questao
        cy.preencherCampo(campoTitulo, " ")
        cy.wait(8000)
        cy.selecionarOpcao(campoTema, data.tema)
        cy.selecionarOpcao(campoDificuldade, data.dificuldade)
        cy.preencherCampo(campoEnunciado, data.enunciado)
        .clicar(btnAdicionarAlternativa)
        cy.preencherCampo(campoAlternativa01, data.alternativa01)
        cy.preencherCampo(campoAlternativa02, data.alternativa02)
        cy.preencherCampo(campoAlternativa03, data.alternativa02)
        .clicar(`#root > section > main > form > div.sc-lbNsEr.ftMHqp > div:nth-child(${data.correta}) > label`)
    })
    cy.clicar(btnCadastrar)
})

Cypress.Commands.add('tentarCadastrarProvaSemSelecionarTema', () => {
    cy.lerArquivo("questao.data.json").then((data) => {
        data = data.questao
        cy.preencherCampo(campoTitulo, data.titulo)
        cy.wait(8000)
        cy.selecionarOpcao(campoDificuldade, data.dificuldade)
        cy.preencherCampo(campoEnunciado, data.enunciado)
        .clicar(btnAdicionarAlternativa)
        cy.preencherCampo(campoAlternativa01, data.alternativa01)
        cy.preencherCampo(campoAlternativa02, data.alternativa02)
        cy.preencherCampo(campoAlternativa03, data.alternativa02)
        .clicar(`#root > section > main > form > div.sc-lbNsEr.ftMHqp > div:nth-child(${data.correta}) > label`)
    })
    cy.clicar(btnCadastrar)
})

Cypress.Commands.add('tentarCadastrarProvaSemEnunciado', () => {
    cy.lerArquivo("questao.data.json").then((data) => {
        data = data.questao
        cy.preencherCampo(campoTitulo, data.titulo)
        cy.wait(8000)
        cy.selecionarOpcao(campoTema, data.tema)
        cy.selecionarOpcao(campoDificuldade, data.dificuldade)
        cy.clicar(btnAdicionarAlternativa)
        cy.preencherCampo(campoAlternativa01, data.alternativa01)
        cy.preencherCampo(campoAlternativa02, data.alternativa02)
        cy.preencherCampo(campoAlternativa03, data.alternativa02)
        .clicar(`#root > section > main > form > div.sc-lbNsEr.ftMHqp > div:nth-child(${data.correta}) > label`)
    })
    cy.clicar(btnCadastrar)
})

Cypress.Commands.add('tentarCadastrarProvaSemCriarAlternativas', () => {
    cy.lerArquivo("questao.data.json").then((data) => {
        data = data.questao
        cy.preencherCampo(campoTitulo, " ")
        cy.wait(8000)
        cy.selecionarOpcao(campoTema, data.tema)
        cy.selecionarOpcao(campoDificuldade, data.dificuldade)
        cy.preencherCampo(campoEnunciado, data.enunciado)
        .clicar(btnAdicionarAlternativa)
    })
    cy.clicar(btnCadastrar)
})