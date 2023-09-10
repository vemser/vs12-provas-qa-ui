// Mapeamento
let descricaoTelaHome = '.sc-gSkWNA > :nth-child(2)'
let btnHome = '.sc-clcPSL > .active'
    let btnCadastrarColaborador = '.sc-lbNsEr > :nth-child(2) > :nth-child(1)'
        let dropdownEmpresa
        let empresa1
        let campoNomeCompletoFuncionario
        let campoEmailFuncionario
        let dropdownCargo
        let cargo1
        let btnCadastrar1
        let btnCancelar1
    let btnCadastrarQuestoes = '.sc-lbNsEr > :nth-child(2) > :nth-child(2)'
        let campoTitulo
        let campoEnunciado
        let dropdownTema
        let tema1
        let dropdownDificuldade1
        let dificuldade1
        let campoAlternativa1
        let campoAlternativa2
        let radiusCorreta1
        let radiusCorreta3
        let btnCadastrar2
        let btnCancelar2
    let btnCadastrarEmpresa = '.sc-lbNsEr > :nth-child(2) > :nth-child(3)'
        let campoNomeFantasia
        let campoCnpj
        let campoNomeCompletoGestor
        let campoEmailGestor
        let btnCadastrar3
        let btnCancelar3
    let btnCadastrarProcessoSeletivo = '.sc-lbNsEr > :nth-child(2) > :nth-child(4)'
        let campoNomeProcessoSeletivo
        let campoDataInicio
        let campoDataTermino
        let campoNotaDeCorte
        let dropDificuldade2
        let campoFaceis
        let campoMedias
        let campoDificeis
        let btnCadastrar4
        let btnCancelar4
    let btnListarColaboradores = '.sc-lbNsEr > :nth-child(4) > :nth-child(1)'
    let btnListarListarEmpresas = '.sc-lbNsEr > :nth-child(4) > :nth-child(2)'
    let btnListarCandidatos = ':nth-child(4) > :nth-child(3)'
let btnProvas = '.sc-gFWRCe > [href="/vemser/vs12-provas-front/dashboard/Provas"]'
let btnExportar = '.sc-gFWRCe > [href="/vemser/vs12-provas-front/dashboard/Exportar"]'
let btnPerfil = '.sc-gFWRCe > [href="/vemser/vs12-provas-front/dashboard/Perfil"]'
let btnSair = '.sign-out > path'


Cypress.Commands.add('acessarCadastrarColaborador', () => {
    cy.get(btnCadastrarColaborador).click()
})

Cypress.Commands.add('cadastrarFuncionario', (NomeCompletoFuncionario, EmailFuncionario) => {
    cy.get(dropdownEmpresa).click()
    cy.get(empresa1).click()
    cy.get(campoNomeCompletoFuncionario).type(NomeCompletoFuncionario)
    cy.get(campoEmailFuncionario).type(EmailFuncionario)
    cy.get(dropdownCargo).click()
    cy.get(cargo1).click()
    cy.get(btnCadastrar1).click()
})

Cypress.Commands.add('cadastrarFuncionarioTudoVazio', (NomeCompletoFuncionario, EmailFuncionario) => {
    cy.get(campoNomeCompletoFuncionario).type(NomeCompletoFuncionario)
    cy.get(campoEmailFuncionario).type(EmailFuncionario)
    cy.get(btnCadastrar1).click()
})

Cypress.Commands.add('cadastrarFuncionarioEmpresaVazio', (NomeCompletoFuncionario, EmailFuncionario) => {
    cy.get(campoNomeCompletoFuncionario).type(NomeCompletoFuncionario)
    cy.get(campoEmailFuncionario).type(EmailFuncionario)
    cy.get(dropdownCargo).click()
    cy.get(cargo1).click()
    cy.get(btnCadastrar1).click()
})
/*
Cypress.Commands.add('cadastrarFuncionarioNomeVazio', (EmailFuncionario) => {
    cy.get(dropdownEmpresa).click()
    cy.get(empresa1).click()
    cy.get(campoEmailFuncionario).type(EmailFuncionario)
    cy.get(dropdownCargo).click()
    cy.get(cargo1).click()
    cy.get(btnCadastrar1).click()
})

Cypress.Commands.add('cadastrarFuncionarioEmailVazio', (NomeCompletoFuncionario) => {
    cy.get(dropdownEmpresa).click()
    cy.get(empresa1).click()
    cy.get(campoNomeCompletoFuncionario).type(NomeCompletoFuncionario)
    cy.get(dropdownCargo).click()
    cy.get(cargo1).click()
    cy.get(btnCadastrar1).click()
})
*/
Cypress.Commands.add('cadastrarFuncionarioCargoVazio', (NomeCompletoFuncionario, EmailFuncionario) => {
    cy.get(dropdownEmpresa).click()
    cy.get(empresa1).click()
    cy.get(campoNomeCompletoFuncionario).type(NomeCompletoFuncionario)
    cy.get(campoEmailFuncionario).type(EmailFuncionario)
    cy.get(btnCadastrar1).click()
})

Cypress.Commands.add('acessarCadastrarQuestoes', () => {
    cy.get(btnCadastrarQuestoes).click()
})

Cypress.Commands.add('cadastrarQuestao', (titulo, enunciado, alternativa1, alternativa2) => {
    cy.get(campoTitulo).type(titulo)
    cy.get(campoEnunciado).type(enunciado)
    cy.get(dropdownTema).click()
    cy.get(tema1).click()
    cy.get(dropdownDificuldade1).click()
    cy.get(dificuldade1).click()
    cy.get(campoAlternativa1).type(alternativa1)
    cy.get(campoAlternativa2).type(alternativa2)
    cy.get(radiusCorreta1).click()
    cy.get(btnCadastrar2).click()
})
/*
Cypress.Commands.add('cadastrarQuestaoTituloVazio', (enunciado, alternativa1, alternativa2) => {
    cy.get(campoEnunciado).type(enunciado)
   cy.get(dropdownTema).click()
    cy.get(tema1).click()
    cy.get(dropdownDificuldade1).click()
    cy.get(dificuldade1).click()
    cy.get(campoAlternativa1).type(alternativa1)
    cy.get(campoAlternativa2).type(alternativa2)
    cy.get(radiusCorreta1).click()
    cy.get(btnCadastrar2).click()
})
*/
Cypress.Commands.add('cadastrarQuestaoTemaVazio', (titulo, enunciado, alternativa1, alternativa2) => {
    cy.get(campoTitulo).type(titulo)
    cy.get(campoEnunciado).type(enunciado)
    cy.get(dropdownDificuldade1).click()
    cy.get(dificuldade1).click()
    cy.get(campoAlternativa1).type(alternativa1)
    cy.get(campoAlternativa2).type(alternativa2)
    cy.get(radiusCorreta1).click()
    cy.get(btnCadastrar2).click()
})

Cypress.Commands.add('cadastrarQuestaoDificuldadeVazio', (titulo, enunciado, alternativa1, alternativa2) => {
    cy.get(campoTitulo).type(titulo)
    cy.get(campoEnunciado).type(enunciado)
    cy.get(dropdownTema).click()
    cy.get(tema1).click()
    cy.get(campoAlternativa1).type(alternativa1)
    cy.get(campoAlternativa2).type(alternativa2)
    cy.get(radiusCorreta1).click()
    cy.get(btnCadastrar2).click()
})

Cypress.Commands.add('cadastrarQuestaoSemCorreta', (titulo, enunciado, alternativa1, alternativa2) => {
    cy.get(campoTitulo).type(titulo)
    cy.get(campoEnunciado).type(enunciado)
    cy.get(dropdownTema).click()
    cy.get(tema1).click()
    cy.get(dropdownDificuldade1).click()
    cy.get(dificuldade1).click()
    cy.get(campoAlternativa1).type(alternativa1)
    cy.get(campoAlternativa2).type(alternativa2)
    cy.get(btnCadastrar2).click()
})

Cypress.Commands.add('cadastrarQuestaoCorretaVazia', (titulo, enunciado, alternativa1, alternativa2) => {
    cy.get(campoTitulo).type(titulo)
    cy.get(campoEnunciado).type(enunciado)
    cy.get(dropdownTema).click()
    cy.get(tema1).click()
    cy.get(dropdownDificuldade1).click()
    cy.get(dificuldade1).click()
    cy.get(campoAlternativa1).type(alternativa1)
    cy.get(campoAlternativa2).type(alternativa2)
    cy.get(radiusCorreta3).click()
    cy.get(btnCadastrar2).click()
})
/*
Cypress.Commands.add('cadastrarQuestaoEnunciadoVazio', (titulo, alternativa1, alternativa2) => {
    cy.get(campoTitulo).type(titulo)
    cy.get(dropdownTema).click()
    cy.get(tema1).click()
    cy.get(dropdownDificuldade1).click()
    cy.get(dificuldade1).click()
    cy.get(campoAlternativa1).type(alternativa1)
    cy.get(campoAlternativa2).type(alternativa2)
    cy.get(radiusCorreta1).click()
    cy.get(btnCadastrar2).click()
})
*/
Cypress.Commands.add('acessarCadastrarEmpresa', () => {
    cy.get(btnCadastrarEmpresa).click()
})

Cypress.Commands.add('CadastrarEmpresa', (nomeFantasia, cnpj, nomeCompleto, email) => {
    cy.get(campoNomeFantasia).type(nomeFantasia)
    cy.get(campoCnpj).type(cnpj)
    cy.get(campoNomeCompletoGestor).type(nomeCompleto)
    cy.get(campoEmailGestor).type(email)
    cy.get(btnCadastrar3).click()
})

Cypress.Commands.add('acessarCadastrarProcessoSeletivo', () => {
    cy.get(btnCadastrarProcessoSeletivo).click()
})

Cypress.Commands.add('acessarListarCadastros', () => {
    cy.get(btnListarColaboradores).click()
})

Cypress.Commands.add('acessarProvas', () => {
    cy.get(btnProvas).click()
})

Cypress.Commands.add('acessarExportar', () => {
    cy.get(btnExportar).click()
})

Cypress.Commands.add('acessarPerfil', () => {
    cy.get(btnPerfil).click()
})

Cypress.Commands.add('acessarSair', () => {
    cy.get(btnSair).click()
})