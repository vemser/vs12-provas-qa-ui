// Textos
let tituloH2Inicio = '#root > section > main > header > h2'
let tituloH3Cadastros = '#root > section > main > section.sc-jdkVqZ.yYmgc > h3:nth-child(1)'
let tituloH3Listagens = '#root > section > main > section.sc-jdkVqZ.yYmgc > h3:nth-child(3)'

//TO-DO: mudar nome de data-tesid para data-testid assim que o front subir o deploy
// Botões Cadastro
let btnColaboradorCadastro = '[data-testid="btnEmployeeRegister"]'
let btnCandidatoCadastro ='[data-testid="btnCandidateRegister"]'
let btnEmpresaCadastro ='[data-testid="btnCompanyRegister"]'
let btnQuestaoCadastro ='[data-testid="btnQuestionRegister"]'
let btnProcessoSeletivoCadastro ='[data-testid="btnProcessRegister"]'

// Botões Listagem
let btnColaboradoresListagem = '[data-testid="btnEmployeeList"]'
let btnEmpresasListagem ='[data-testid="btnCompanyList"]'
let btnCandidatosListagem ='[data-testid="btnCandidateList"]'
let btnQuestoesListagem ='[data-testid="btnQuestionList"]'
let btnProcessosListagem ='[data-testid="btnProcessList"]'

// Botão Sair
let btnSair = '#root > section > nav.sc-hjcAwj.iWHPTG > button'

Cypress.Commands.add('clicarBtnColaboradorHome', () => {
    cy.clicar(btnColaboradorCadastro)
    cy.url().should('contain', '/cadastro/colaborador')
})

Cypress.Commands.add('clicarBtnCandidatoHome', () => {
    cy.clicar(btnCandidatoCadastro)
    cy.url().should('contain', '/cadastro/candidato')
})

Cypress.Commands.add('clicarBtnEmpresaHome', () => {
    cy.clicar(btnEmpresaCadastro)
    cy.url().should('contain', '/cadastro/empresa')
})

Cypress.Commands.add('clicarBtnQuestaoHome', () => {
    cy.clicar(btnQuestaoCadastro)
    cy.url().should('contain', '/cadastro/questoes')
})

Cypress.Commands.add('clicarBtnProcessoHome', () => {
    cy.clicar(btnProcessoSeletivoCadastro)
    cy.url().should('contain', '/cadastro/processo-seletivo')
})