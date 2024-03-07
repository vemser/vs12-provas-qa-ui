import { faker } from '@faker-js/faker';

// seção de cadastros
let btnQuestoesCadastros = '[data-testid="btnQuestionRegister"]'
let btnProcessoSeletivo = '[data-testid="btnProcessRegister"]'
let tituloH2Provas ='#root > section > main > header > h2'
let tituloH2CadastrarForm = '#root > section > main > form > h2'

// seção de listagens
let btnQuestoesListagens = '[data-testid="btnQuestionList"]'
let tituloH1Listagem = '#root > section > main > h1'
let primeiraQuestao = '.MuiTableBody-root > :nth-child(1) > :nth-child(3)'
let btnUltimaPagina = ':nth-child(8) > .MuiButtonBase-root'

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

let spanTituloInvalido = '[data-testid="errorTitleQuestion"]'
let spanDificuldadeInvalida = '#root > section > main > form > p:nth-child(12)'
let spanEnunciadoInvalido = '[data-testid="errorPromptQuestion"]'

let modelFeedback = '.Toastify__toast-body > :nth-child(2)'
let txtModelFeedbackQuestao = 'Questão cadastrada com sucesso!'
let msgmCampoObrigatorio = 'Campo obrigatório'

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
        cy.preencherCampo(campoAlternativa03, data.alternativa03)
        .clicar(`#root > section > main > form > div.sc-lbNsEr.ftMHqp > div:nth-child(${data.correta}) > label`)
    })
    cy.clicar(btnCadastrar)
    cy.contains(modelFeedback, txtModelFeedbackQuestao)

})

Cypress.Commands.add('acessarListagemDeQuestãoPeloMenuProvas', () => {
    
    cy.clicar(btnProvas)
    cy.contains(tituloH2Provas, 'Provas')
    cy.clicar(btnQuestoesListagens)
    cy.contains(tituloH1Listagem, 'Lista de Questões')
    //cy.wait(5000)
    cy.contains(primeiraQuestao, 'FACIL')
})

Cypress.Commands.add('desativarQuestaoCadastradaPeloMenuProvas', () => {
    cy.acessarListagemDeQuestãoPeloMenuProvas()
    cy.clicar(btnUltimaPagina)
    
    cy.wait(2000)

    cy.get('table > tbody > tr')
    .last() 
    .find('td.MuiTableCell-root.MuiTableCell-body.MuiTableCell-alignRight.MuiTableCell-sizeMedium.css-8q2lh2 > svg:nth-child(2)') // Seletor para encontrar o elemento svg dentro do último tr
    .click();

    cy.clicar('body > div.sc-fbzYXw.TxAlp.MuiModal-root.css-8ndowl > div.MuiPaper-root.MuiPaper-elevation.MuiPaper-rounded.MuiPaper-elevation1.sc-GFXod.loPhAS.css-aoeo82 > div.sc-fXitXF.cHZwRI > button.MuiButtonBase-root.MuiButton-root.MuiButton-contained.MuiButton-containedPrimary.MuiButton-sizeMedium.MuiButton-containedSizeMedium.MuiButton-root.MuiButton-contained.MuiButton-containedPrimary.MuiButton-sizeMedium.MuiButton-containedSizeMedium.sc-dwvMdg.lktNOs.css-1hw9j7s')

})

Cypress.Commands.add('tentarCadastrarProvaComTituloInvalido', () => {
    cy.lerArquivo("questao.data.json").then((data) => {
        data = data.questao
        cy.preencherCampo(campoTitulo, "A casa do menino é azul e o pai dele gosta de amarelo")
        cy.wait(5000)
        cy.selecionarOpcao(campoTema, data.tema01)
        cy.clicar(btnAdicionarTema)
        cy.selecionarOpcao(campoDificuldade, data.dificuldade)
        cy.preencherCampo(campoEnunciado, data.enunciado)
        cy.selecionarOpcao(campoDificuldade, data.dificuldade)
        cy.selecionarOpcao(campoTipoDeQuestao, "OBJETIVA")
        .clicar(btnAdicionarAlternativa)
        cy.preencherCampo(campoAlternativa01, data.alternativa01)
        cy.preencherCampo(campoAlternativa02, data.alternativa02)
        cy.preencherCampo(campoAlternativa03, data.alternativa03)
        .clicar(`#root > section > main > form > div.sc-lbNsEr.ftMHqp > div:nth-child(${data.correta}) > label`)
    })
    cy.clicar(btnCadastrar)
    cy.contains(spanTituloInvalido, 'Título muito longo')
})

Cypress.Commands.add('tentarCadastrarProvaSemSelecionarTema', () => {
    cy.lerArquivo("questao.data.json").then((data) => {
        data = data.questao
        cy.preencherCampo(campoTitulo, data.titulo)
        cy.selecionarOpcao(campoDificuldade, data.dificuldade)
        cy.preencherCampo(campoEnunciado, data.enunciado)
        cy.selecionarOpcao(campoDificuldade, data.dificuldade)
        cy.selecionarOpcao(campoTipoDeQuestao, "OBJETIVA")
        .clicar(btnAdicionarAlternativa)
        cy.preencherCampo(campoAlternativa01, data.alternativa01)
        cy.preencherCampo(campoAlternativa02, data.alternativa02)
        cy.preencherCampo(campoAlternativa03, data.alternativa03)
        .clicar(`#root > section > main > form > div.sc-lbNsEr.ftMHqp > div:nth-child(${data.correta}) > label`)
    })
    cy.clicar(btnCadastrar)
})

Cypress.Commands.add('tentarCadastrarProvaSemEnunciado', () => {
    cy.lerArquivo("questao.data.json").then((data) => {
        data = data.questao
        cy.preencherCampo(campoTitulo, data.titulo)
        cy.wait(5000)
        cy.selecionarOpcao(campoTema, data.tema01)
        cy.clicar(btnAdicionarTema)
        cy.selecionarOpcao(campoDificuldade, data.dificuldade)
        cy.selecionarOpcao(campoDificuldade, data.dificuldade)
        cy.selecionarOpcao(campoTipoDeQuestao, "OBJETIVA")
        .clicar(btnAdicionarAlternativa)
        cy.preencherCampo(campoAlternativa01, data.alternativa01)
        cy.preencherCampo(campoAlternativa02, data.alternativa02)
        cy.preencherCampo(campoAlternativa03, data.alternativa03)
        .clicar(`#root > section > main > form > div.sc-lbNsEr.ftMHqp > div:nth-child(${data.correta}) > label`)
    })
    cy.clicar(btnCadastrar)
    cy.contains(spanEnunciadoInvalido, msgmCampoObrigatorio)
})

Cypress.Commands.add('tentarCadastrarProvaSemCriarAlternativas', () => {
    cy.lerArquivo("questao.data.json").then((data) => {
        data = data.questao
        cy.preencherCampo(campoTitulo, data.titulo)
        cy.wait(5000)
        cy.selecionarOpcao(campoTema, data.tema01)
        cy.clicar(btnAdicionarTema)
        cy.selecionarOpcao(campoDificuldade, data.dificuldade)
        cy.preencherCampo(campoEnunciado, data.enunciado)
        cy.selecionarOpcao(campoDificuldade, data.dificuldade)
        cy.selecionarOpcao(campoTipoDeQuestao, "OBJETIVA")
    })
    cy.clicar(btnCadastrar)
})