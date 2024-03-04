import { faker } from '@faker-js/faker';

// Textos
let tituloH2Empresa = '#root > section > main > header > h2'
let tituloH2CadastrarForm = '#root > section > main > form > h2'
let tituloH3Listagens = '#root > section > main > section > h3:nth-child(3)'

//TO-DO: mudar nome de data-tesid para data-testid assim que o front subir o deploy
// Botões Cadastro
let btnColaboradorCadastro = '[data-testid="btnEmployeeRegister"]' //TO-DO: mudar nome de botão assim que realizar a mudança do front (btnEmployeeRegister)
let btnProcessoSeletivoCadastro ='[data-testid="btnProcessRegister"]'

// Botões Listagem
let btnColaboradorListagem = '[data-testid="btnEmployeeList"]'

// Navbar Menu
let btnMenuEmpresas = '.sc-oASGG > [href="/vemser/vs12-provas-front/dashboard/empresa"]'
// let btnMenuEmpresas = '[href="/dashboard/empresa"]'

// Cadastro Colaborador Campos
let campoEmpresa = '[data-testid="inputFormEmpresa"]'
let campoNomeCompleto = '[data-testid="inputNomeUsuario"]'
let campoEmail = '[data-testid="inputEmailUsuario"]'
let campoCargo = '[data-testid="inputCargoUsuario"]'

// Cadastro Colaborador Botões
let btnCadastrar = '[data-testid="btnCadastrar"]'
let btnCancelar = '[data-testid="btnCancelar"]'

// Cadastro Processo Seletivo Campos
campoEmpresa = '[data-testid="inputFormEmpresa"]'
let campoNomeProcessoSeletivo = '[data-testid="inputNomeProcesso"]'
let campoDataInicial = '[data-testid="inputDataInicial"]'
let campoDataFinal = '[data-testid="inputDataFinal"]'
let campoNotaDeCorte = '[data-testid="inputNotaCote"]'
let campoDificuldade = '[data-testid="selectDificuldadeQuestao"]'
let campoTema = '[data-testid="selectIdsTemas"]'
let campoObjetivas = '[data-testid="inputqtdObjetivas"]'
let campoTecnicas = '[data-testid="inputqtdTecnicas"]'
let campoQntPerguntasFaceis = '[data-testid="inputqtdFacil"]'
let campoQntPerguntasMedias= '[data-testid="inputQtMedio"]'
let campoQntPerguntasDificeis = '[data-testid="inputQtDifil"]'

// Cadastro Processo Botões
let btnAdicionar = '[data-testid="btnAddTheme"]'
btnCadastrar = '[data-testid="btnCadastrar"]'
btnCancelar = '[data-testid="btnCancelar"]'

// Cadastro Processo Variáveis
let quantidadeObjetivas = 0
let quantidadeTecnicas = 0

// Listagem Colaboradores
let tituloPagina = '[data-testid="employeesListTitle"]'
let empresaExemplo = '.MuiTableBody-root > :nth-child(1) > :nth-child(3)'

// Model Feedback
let modelFeedback = '.Toastify__toast-body > :nth-child(2)'
let txtModelFeedback = 'Sucesso'

Cypress.Commands.add('acessarCadastroDeColaboradorPeloMenuEmpresas', () => {
    cy.clicar(btnMenuEmpresas)
    cy.contains(tituloH2Empresa, 'Empresa')
    cy.clicar(btnColaboradorCadastro)
    cy.contains(tituloH2CadastrarForm, 'Cadastrar Colaborador')
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
    cy.wait(8000)
    cy.contains(modelFeedback, txtModelFeedback)
})

Cypress.Commands.add('acessarCadastroDeProcessoPeloMenuEmpresas', () => {
    cy.clicar(btnMenuEmpresas)
    cy.contains(tituloH2Empresa, 'Empresa')
    cy.clicar(btnProcessoSeletivoCadastro)
    cy.contains(tituloH2CadastrarForm, 'Cadastrar Processo Seletivo')
})

Cypress.Commands.add('cadastrarProcessoComDadosValidos', () => {
    cy.lerArquivo("processo.data.json").then((data) => {
        data = data.processo
        let soma = data.quantidadeFacil + data.quantidadeMedio + data.quantidadeDificil
        let divisao
        if (soma % 2 == 0){
            divisao = soma / 2
            quantidadeObjetivas = divisao
            quantidadeTecnicas = divisao
        }else{
            soma -= 1
            divisao = soma / 2
            quantidadeObjetivas = divisao + 1
            quantidadeTecnicas = divisao
        }
        cy.selecionarOpcao(campoEmpresa, data.empresa)
        cy.preencherCampo(campoNomeProcessoSeletivo, data.nomeProcessoSeletivo)
        cy.preencherCampo(campoDataInicial, data.dataHoraInicial)
        cy.preencherCampo(campoDataFinal, data.dataHoraFinal)
        cy.preencherCampo(campoNotaDeCorte, data.notaDeCorte)
        cy.selecionarOpcao(campoDificuldade, data.dificuldade)
        cy.selecionarOpcao(campoTema, data.tema01)
        cy.clicar(btnAdicionar)
        cy.selecionarOpcao(campoTema, data.tema02)
        cy.clicar(btnAdicionar)
        cy.selecionarOpcao(campoTema, data.tema03)
        cy.clicar(btnAdicionar)
        cy.preencherCampo(campoObjetivas, quantidadeObjetivas)
        cy.preencherCampo(campoTecnicas, quantidadeTecnicas)
        cy.preencherCampo(campoQntPerguntasFaceis, data.quantidadeFacil)
        cy.preencherCampo(campoQntPerguntasMedias, data.quantidadeMedio)
        cy.preencherCampo(campoQntPerguntasDificeis, data.quantidadeDificil)
    })
    cy.clicar(btnCadastrar)
})

Cypress.Commands.add('acessarListagemDeColaboradoresPeloMenuEmpresas', () => {
    cy.clicar(btnMenuEmpresas)
    cy.contains(tituloH2Empresa, 'Empresa')
    cy.clicar(btnColaboradorListagem)
    cy.contains(tituloPagina, 'Lista de Colaboradores')
    cy.contains(empresaExemplo, 'GERAL')
})