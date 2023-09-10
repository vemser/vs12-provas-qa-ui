// Mapeamento
let campoEmailLogin = '#email'
let campoSenha = '[data-testid="input-password-form"]'
let btnEntrar = '.sc-jfLZDZ'

let btnCadastrarProcessoSeletivo = ':nth-child(2) > :nth-child(5)'
let dropdownEmpresa = '#empresa'
let campoNomeProcesso = '#nome'
let campoDataHoraInicial = '#dataInicial'
let campoDataHoraFinal = '#dataFinal'
let campoNotaDeCorte = '#notaCote'
let dropdownDificuldade = '#dificuldade'
let dropdownTema = '#idsTemas'
let campoQuantidadeFacil = '#qtdFacil'
let campoQuantidadeMedio = '#qtdMedia'
let campoQuantidadeDificil = '#qtdDificil'
let btnIncluirPublicas = '#possuiQuestoesPublicas'
let btnCadastrar = '#btnCadastrar'
let btnCancelar = '#btnCancelar'

let btnProvas = '.sc-gFWRCe > [href="/vemser/vs12-provas-front/dashboard/Provas"]'
let btnExportar = '.sc-gFWRCe > [href="/vemser/vs12-provas-front/dashboard/Exportar"]'
let btnPerfil = '.sc-gFWRCe > [href="/vemser/vs12-provas-front/dashboard/Perfil"]'
let btnSair = '.sign-out > path'

Cypress.Commands.add('acessarCadastrarProcessoSeletivo', () => {
    cy.visit("/login")
    cy.get(campoEmailLogin).type("admin@email.com")
    cy.get(campoSenha).type("Provas123")
    cy.get(btnEntrar).click()
    cy.get(btnCadastrarProcessoSeletivo).click()
})

Cypress.Commands.add('cadastrarProcessoSeletivo', (nomeProcessoSeletivo, dataHoraInicial, dataHoraFinal, notaDeCorte, quantidadeFacil,
     quantidadeMedio, quantidadeDificil) => {
    cy.get(dropdownEmpresa).select(1)
    cy.get(campoNomeProcesso).type(nomeProcessoSeletivo)
    cy.get(campoDataHoraInicial).type(dataHoraInicial)
    cy.get(campoDataHoraFinal).type(dataHoraFinal)
    cy.get(campoNotaDeCorte).type(notaDeCorte)
    cy.get(dropdownDificuldade).select(1)
    cy.get(dropdownTema).select(1)
    cy.get(campoQuantidadeFacil).type(quantidadeFacil)
    cy.get(campoQuantidadeMedio).type(quantidadeMedio)
    cy.get(campoQuantidadeDificil).type(quantidadeDificil)
    //cy.get(btnIncluirPublicas).click()
    cy.get(btnCadastrar).click()
})

Cypress.Commands.add('cadastrarProcessoSeletivoSemNome', (dataHoraInicial, dataHoraFinal, notaDeCorte, quantidadeFacil,
    quantidadeMedio, quantidadeDificil) => {
   //cy.get(dropdownEmpresa).select(1)
   cy.get(campoDataHoraInicial).type(dataHoraInicial)
   cy.get(campoDataHoraFinal).type(dataHoraFinal)
   cy.get(campoNotaDeCorte).type(notaDeCorte)
   cy.get(dropdownDificuldade).select(1)
   //cy.get(dropdownTema).select(1)
   cy.get(campoQuantidadeFacil).type(quantidadeFacil)
   cy.get(campoQuantidadeMedio).type(quantidadeMedio)
   cy.get(campoQuantidadeDificil).type(quantidadeDificil)
   //cy.get(btnIncluirPublicas).click()
   cy.get(btnCadastrar).click()
})

Cypress.Commands.add('cadastrarProcessoSeletivoSemDataInicio', (nomeProcessoSeletivo, dataHoraFinal, notaDeCorte, quantidadeFacil,
    quantidadeMedio, quantidadeDificil) => {
   //cy.get(dropdownEmpresa).select(1)
   cy.get(campoNomeProcesso).type(nomeProcessoSeletivo)
   cy.get(campoDataHoraFinal).type(dataHoraFinal)
   cy.get(campoNotaDeCorte).type(notaDeCorte)
   //cy.get(dropdownDificuldade).select(1)
   //cy.get(dropdownTema).select(1)
   cy.get(campoQuantidadeFacil).type(quantidadeFacil)
   cy.get(campoQuantidadeMedio).type(quantidadeMedio)
   cy.get(campoQuantidadeDificil).type(quantidadeDificil)
   //cy.get(btnIncluirPublicas).click()
   cy.get(btnCadastrar).click()
})

Cypress.Commands.add('cadastrarProcessoSeletivoSemDataFinal', (nomeProcessoSeletivo, dataHoraInicial, notaDeCorte, quantidadeFacil,
    quantidadeMedio, quantidadeDificil) => {
   //cy.get(dropdownEmpresa).select(1)
   cy.get(campoNomeProcesso).type(nomeProcessoSeletivo)
   cy.get(campoDataHoraInicial).type(dataHoraInicial)
   cy.get(campoNotaDeCorte).type(notaDeCorte)
   //cy.get(dropdownDificuldade).select(1)
   //cy.get(dropdownTema).select(1)
   cy.get(campoQuantidadeFacil).type(quantidadeFacil)
   cy.get(campoQuantidadeMedio).type(quantidadeMedio)
   cy.get(campoQuantidadeDificil).type(quantidadeDificil)
   //cy.get(btnIncluirPublicas).click()
   cy.get(btnCadastrar).click()
})

Cypress.Commands.add('cadastrarProcessoSeletivoSemNotaCorte', (nomeProcessoSeletivo, dataHoraInicial, dataHoraFinal, quantidadeFacil,
    quantidadeMedio, quantidadeDificil) => {
   //cy.get(dropdownEmpresa).select("1")
   cy.get(campoNomeProcesso).type(nomeProcessoSeletivo)
   cy.get(campoDataHoraInicial).type(dataHoraInicial)
   cy.get(campoDataHoraFinal).type(dataHoraFinal)
   //cy.get(dropdownDificuldade).select("1")
   //cy.get(dropdownTema).select(1)
   cy.get(campoQuantidadeFacil).type(quantidadeFacil)
   cy.get(campoQuantidadeMedio).type(quantidadeMedio)
   cy.get(campoQuantidadeDificil).type(quantidadeDificil)
   //cy.get(btnIncluirPublicas).click()
   cy.get(btnCadastrar).click()
})

Cypress.Commands.add('cadastrarProcessoSeletivoSemDificuldade', (nomeProcessoSeletivo, dataHoraInicial, dataHoraFinal, notaDeCorte, quantidadeFacil,
    quantidadeMedio, quantidadeDificil) => {
   //cy.get(dropdownEmpresa).select(1)
   cy.get(campoNomeProcesso).type(nomeProcessoSeletivo)
   cy.get(campoDataHoraInicial).type(dataHoraInicial)
   cy.get(campoDataHoraFinal).type(dataHoraFinal)
   cy.get(campoNotaDeCorte).type(notaDeCorte)
   //cy.get(dropdownTema).select(1)
   cy.get(campoQuantidadeFacil).type(quantidadeFacil)
   cy.get(campoQuantidadeMedio).type(quantidadeMedio)
   cy.get(campoQuantidadeDificil).type(quantidadeDificil)
   //cy.get(btnIncluirPublicas).click()
   cy.get(btnCadastrar).click()
})

Cypress.Commands.add('cadastrarProcessoSeletivoSemTema', (nomeProcessoSeletivo, dataHoraInicial, dataHoraFinal, notaDeCorte, quantidadeFacil,
    quantidadeMedio, quantidadeDificil) => {
   //cy.get(dropdownEmpresa).select(1)
   cy.get(campoNomeProcesso).type(nomeProcessoSeletivo)
   cy.get(campoDataHoraInicial).type(dataHoraInicial)
   cy.get(campoDataHoraFinal).type(dataHoraFinal)
   cy.get(campoNotaDeCorte).type(notaDeCorte)
   //cy.get(dropdownDificuldade).select(1)
   cy.get(campoQuantidadeFacil).type(quantidadeFacil)
   cy.get(campoQuantidadeMedio).type(quantidadeMedio)
   cy.get(campoQuantidadeDificil).type(quantidadeDificil)
   //cy.get(btnIncluirPublicas).click()
   cy.get(btnCadastrar).click()
})

Cypress.Commands.add('cadastrarProcessoSeletivoSemFacil', (nomeProcessoSeletivo, dataHoraInicial, dataHoraFinal, notaDeCorte, quantidadeMedio, quantidadeDificil) => {
   //cy.get(dropdownEmpresa).select(1)
   cy.get(campoNomeProcesso).type(nomeProcessoSeletivo)
   cy.get(campoDataHoraInicial).type(dataHoraInicial)
   cy.get(campoDataHoraFinal).type(dataHoraFinal)
   cy.get(campoNotaDeCorte).type(notaDeCorte)
   //cy.get(dropdownDificuldade).select(1)
   //cy.get(dropdownTema).select(1)
   cy.get(campoQuantidadeMedio).type(quantidadeMedio)
   cy.get(campoQuantidadeDificil).type(quantidadeDificil)
   //cy.get(btnIncluirPublicas).click()
   cy.get(btnCadastrar).click()
})

Cypress.Commands.add('cadastrarProcessoSeletivoSemMedio', (nomeProcessoSeletivo, dataHoraInicial, dataHoraFinal, notaDeCorte, quantidadeFacil, quantidadeDificil) => {
   //cy.get(dropdownEmpresa).select(1)
   cy.get(campoNomeProcesso).type(nomeProcessoSeletivo)
   cy.get(campoDataHoraInicial).type(dataHoraInicial)
   cy.get(campoDataHoraFinal).type(dataHoraFinal)
   cy.get(campoNotaDeCorte).type(notaDeCorte)
   //cy.get(dropdownDificuldade).select(1)
   //cy.get(dropdownTema).select(1)
   cy.get(campoQuantidadeFacil).type(quantidadeFacil)
   cy.get(campoQuantidadeDificil).type(quantidadeDificil)
   //cy.get(btnIncluirPublicas).click()
   cy.get(btnCadastrar).click()
})

Cypress.Commands.add('cadastrarProcessoSeletivoSemDificil', (nomeProcessoSeletivo, dataHoraInicial, dataHoraFinal, notaDeCorte, quantidadeFacil,
    quantidadeMedio) => {
   //cy.get(dropdownEmpresa).select(1)
   cy.get(campoNomeProcesso).type(nomeProcessoSeletivo)
   cy.get(campoDataHoraInicial).type(dataHoraInicial)
   cy.get(campoDataHoraFinal).type(dataHoraFinal)
   cy.get(campoNotaDeCorte).type(notaDeCorte)
   //cy.get(dropdownDificuldade).select(1)
   //cy.get(dropdownTema).select(1)
   cy.get(campoQuantidadeFacil).type(quantidadeFacil)
   cy.get(campoQuantidadeMedio).type(quantidadeMedio)
   //cy.get(btnIncluirPublicas).click()
   cy.get(btnCadastrar).click()
})


