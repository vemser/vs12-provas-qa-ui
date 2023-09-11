// Mapeamento
let campoNomeFantasia = '#nome'
let campoCnpj = '#cnpj'
let campoNomeCompleto = '#nomeFuncionario'
let campoEmail = '#email'


let btnCadastrarColaborador = '.sc-iOmpNS > :nth-child(2) > :nth-child(1)'
let btnCadastrarQuestoes = '.sc-iOmpNS > :nth-child(2) > :nth-child(4)'
let btnCadastrarEmpresa = '.sc-iOmpNS > :nth-child(2) > :nth-child(3)'
let btnCadastrarProcessoSeletivo = '.sc-lbNsEr > :nth-child(2) > :nth-child(4)'
let btnListarColaboradores = '.sc-iOmpNS > :nth-child(4) > :nth-child(1)'
let btnListarEmpresas = '.sc-iOmpNS > :nth-child(4) > :nth-child(2)'
let btnListarCandidatos = ':nth-child(4) > :nth-child(3)'
let btnProvas = '.sc-fXitXF > [href="/vemser/vs12-provas-front/dashboard/Provas"]'
let btnEmpresa = '[href="/vemser/vs12-provas-front/dashboard/Empresa"]'
let btnPerfil = '.sc-fXitXF > [href="/vemser/vs12-provas-front/dashboard/Perfil"]'
let btnSair = '.sign-out > path'
let btnCadastrar ='#btnCadastrar'
let btnCancelar = '#btnCancelar'


Cypress.Commands.add('acessarHome', () => {

    cy.fixture('login.data.json').then(data => {
        cy.efetuarLogin(data.admGeral[0].email, data.admGeral[0].senha)
        cy.url().should('eq', 'http://vemser-dbc.dbccompany.com.br:39000/vemser/vs12-provas-front/dashboard')
    })
})


Cypress.Commands.add('acessarCadastrarColaborador', () => {
    cy.get(btnCadastrarColaborador).click()   
})

Cypress.Commands.add('acessarCadastrarQuestoes', () => {
    cy.get(btnCadastrarQuestoes).click()
})

Cypress.Commands.add('acessarCadastrarEmpresa', () => {
    cy.get(btnCadastrarEmpresa).click({force: true})
})

Cypress.Commands.add('acessarCadastrarProcessoSeletivo', () => {
    cy.get(btnCadastrarProcessoSeletivo).click()
})

Cypress.Commands.add('acessarListarColaboradores', () => {
    cy.get(btnListarColaboradores).click()
})

Cypress.Commands.add('acessarListarEmpresas', () => {
    cy.get(btnListarEmpresas).click()
})

Cypress.Commands.add('acessarListarCandidatos', () => {
    cy.get(btnListarCandidatos).click()
})

Cypress.Commands.add('acessarProvas', () => {
    cy.get(btnProvas).click()
})

Cypress.Commands.add('acessarEmpresa', () => {
    cy.get(btnEmpresa).click()
})

Cypress.Commands.add('acessarPerfil', () => {
    cy.get(btnPerfil).click()
})

Cypress.Commands.add('acessarSair', () => {
    cy.get(btnSair).click()
})

Cypress.Commands.add('cadastrarEmpresaComSucesso', (nomeFantasia, cnpj, nomeCompleto, email) => {
    cy.get(btnCadastrarEmpresa).click({force: true})
    cy.get(campoNomeFantasia).type(nomeFantasia)
    cy.get(campoCnpj).type(cnpj)
    cy.get(campoNomeCompleto).type(nomeCompleto)
    cy.get(campoEmail).type(email)
    cy.get(btnCadastrar).click()
})

Cypress.Commands.add('cadastrarEmpresaSemPassarNomeFantasiaSemSucesso', (cnpj, nomeCompleto, email) => {
    cy.get(btnCadastrarEmpresa).click({force: true})   
    cy.get(campoCnpj).type(cnpj)
    cy.get(campoNomeCompleto).type(nomeCompleto)
    cy.get(campoEmail).type(email)
    cy.get(btnCadastrar).click()
})

Cypress.Commands.add('cadastrarEmpresaSemPassarCnpjSemSucesso', (nomeFantasia, nomeCompleto, email) => {
    cy.get(btnCadastrarEmpresa).click({force: true})
    cy.get(campoNomeFantasia).type(nomeFantasia)    
    cy.get(campoNomeCompleto).type(nomeCompleto)
    cy.get(campoEmail).type(email)
    cy.get(btnCadastrar).click()
})

Cypress.Commands.add('cadastrarEmpresaSemNomeCompletoSemSucesso', (nomeFantasia, cnpj,  email) => {
    cy.get(btnCadastrarEmpresa).click({force: true})
    cy.get(campoNomeFantasia).type(nomeFantasia)
    cy.get(campoCnpj).type(cnpj)    
    cy.get(campoEmail).type(email)
    cy.get(btnCadastrar).click()    
})

Cypress.Commands.add('cadastrarEmpresaSemEmailSemSucesso', (nomeFantasia, cnpj, nomeCompleto) => {
    cy.get(btnCadastrarEmpresa).click({force: true})
    cy.get(campoNomeFantasia).type(nomeFantasia)
    cy.get(campoCnpj).type(cnpj)
    cy.get(campoNomeCompleto).type(nomeCompleto)    
    cy.get(btnCadastrar).click()
     
})