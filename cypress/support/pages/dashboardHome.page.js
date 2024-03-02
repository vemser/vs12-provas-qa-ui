// Textos
let tituloH2Inicio = '#root > section > main > header > h2'
let tituloH3Cadastros = '#root > section > main > section.sc-jdkVqZ.yYmgc > h3:nth-child(1)'
let tituloH3Listagens = '#root > section > main > section.sc-jdkVqZ.yYmgc > h3:nth-child(3)'

//TO-DO: mudar nome de data-tesid para data-testid assim que o front subir o deploy
// Botões Cadastro
let btnColaboradorCadastro = '[data-tesid="btnEmployeeRegister"]'
let btnCandidatoCadastro ='[data-tesid="btnCandidateRegister"]'
let btnEmpresaCadastro ='[data-tesid="btnCompanyRegister"]'
let btnQuestoesCadastro ='[data-tesid="btnQuestionRegister"]'
let btnProcessoSeletivoCadastro ='[data-tesid="btnProcessRegister"]'

// Botões Listagem
let btnColaboradorListagem = '[data-tesid="btnEmployeeList"]'
let btnEmpresaListagem ='[data-tesid="btnCompanyList"]'
let btnCandidatoListagem ='[data-tesid="btnCandidateList"]'
let btnQuestoesListagem ='[data-tesid="btnQuestionList"]'


Cypress.Commands.add('clicarNoColaborador', () => {
    
    cy.clicar(btnColaborador)
})