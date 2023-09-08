// Mapeamento
let btnHome
let btnProvas
    let btnCadastrarQuestoes
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
        let btnCadastrar1
        let btnCancelar1
    let btnCriarProcessoSeletivo
        let dropdownEmpresa2
        let empresaProcesso
        let campoNomeProcessoSeletivo
        let campoDataInicio
        let campoDataTermino
        let campoNotaDeCorte
        let dropDificuldade2
        let dificuldadeProcesso
        let campoFaceis
        let campoMedias
        let campoDificeis
        let btnCadastrar2
        let btnCancelar2
    let btnListarQuestoes
    let btnListarProvas
let btnExportar
let btnPerfil
let btnSair

Cypress.Commands.add('acessarProvas', () => {
    cy.get(btnProvas).click()
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

Cypress.Commands.add('acessarCadastrarProcessoSeletivo', () => {
    cy.get(btnCriarProcessoSeletivo).click()
})

Cypress.Commands.add('CadastrarProcessoSeletivo', (nomeProcesso, dataHoraInicio, dataHoraTermino, notaDeCorte, faceis, medias, dificeis) => {
    cy.get(dropdownEmpresa2).click()
    cy.get(empresaProcesso).click()
    cy.get(campoNomeProcessoSeletivo).type(nomeProcesso)
    cy.get(campoDataInicio).type(dataHoraInicio)
    cy.get(campoDataTermino).type(dataHoraTermino)
    cy.get(campoNotaDeCorte).type(notaDeCorte)
    cy.get(dropDificuldade2).click()
    cy.get(dificuldadeProcesso).click()
    cy.get(campoFaceis).type(faceis)
    cy.get(campoMedias).type(medias)
    cy.get(campoDificeis).type(dificeis)
    cy.get(btnCadastrar2).click()
})

Cypress.Commands.add('CadastrarProcessoSeletivoDificuldadeVazio', (nomeProcesso, dataHoraInicio, dataHoraTermino, notaDeCorte, faceis, medias, dificeis) => {
    cy.get(dropdownEmpresa2).click()
    cy.get(empresaProcesso).click()
    cy.get(campoNomeProcessoSeletivo).type(nomeProcesso)
    cy.get(campoDataInicio).type(dataHoraInicio)
    cy.get(campoDataTermino).type(dataHoraTermino)
    cy.get(campoNotaDeCorte).type(notaDeCorte)
    cy.get(campoFaceis).type(faceis)
    cy.get(campoMedias).type(medias)
    cy.get(campoDificeis).type(dificeis)
    cy.get(btnCadastrar2).click()
})

Cypress.Commands.add('acessarListarQuestoes', () => {
    cy.get(btnListarQuestoes).click()
})

Cypress.Commands.add('acessarListarProvas', () => {
    cy.get(btnListarProvas).click()
})

Cypress.Commands.add('acessarHome', () => {
    cy.get(btnHome).click()
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