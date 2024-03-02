import { faker } from '@faker-js/faker';

// Textos
let tituloH2Empresa = '#root > section > main > header > h2'
let tituloH2CadastrarForm = '#root > section > main > form > h2'
let tituloH3Listagens = '#root > section > main > section > h3:nth-child(3)'

//TO-DO: mudar nome de data-tesid para data-testid assim que o front subir o deploy
// Botões Cadastro
let btnColaboradorCadastro = '[data-tesid="btnCandidateRegister"]' //TO-DO: mudar nome de botão assim que realizar a mudança do front (btnEmployeeRegister)
let btnProcessoSeletivoCadastro ='[data-tesid="btnProcessRegister"]'

// Botões Listagem
let btnColaboradorListagem = '[data-tesid="btnEmployeeList"]'

// Navbar Menu
//let btnMenuEmpresas = '[href="/vemser/vs12-provas-front/dashboard/empresa"]'
let btnMenuEmpresas = '[href="/dashboard/empresa"]'

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
let campoQntPerguntasFaceis = '[data-testid="inputqtdFacil"]'
let campoQntPerguntasMedias= '[data-testid="inputQtMedio"]'
let campoQntPerguntasDificeis = '[data-testid="inputQtDifil"]'

// Listagem Colaboradores
let tituloPagina = '#root > section > main > h1'
let colaboradorExemplo = '.MuiTableBody-root > :nth-child(1) > th.MuiTableCell-root'

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
    cy.wait(8000);
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
        cy.selecionarOpcao(campoEmpresa, data.empresa)
        cy.preencherCampo(campoNomeProcessoSeletivo, data.nomeProcessoSeletivo)
        cy.preencherCampo(campoDataInicial, data.dataHoraInicial)
        cy.preencherCampo(campoDataFinal, data.dataHoraFinal)
        cy.preencherCampo(campoNotaDeCorte, data.notaDeCorte)
        cy.selecionarOpcao(campoDificuldade, data.dificuldade)
        cy.selecionarOpcao(campoTema, data.tema)
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
    cy.contains(tituloPagina, 'Listar Colaboradores')
    cy.contains(colaboradorExemplo, 'Nataniel')
})