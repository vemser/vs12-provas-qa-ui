// Textos
let tituloH2Inicio = '#root > section > main > header > h2'
let tituloH3Cadastros = '#root > section > main > section.sc-jdkVqZ.yYmgc > h3:nth-child(1)'
let tituloH3Listagens = '#root > section > main > section.sc-jdkVqZ.yYmgc > h3:nth-child(3)'

// Botões Cadastro
let btnColaboradorCadastro = '[aria-label="Colaborador"]'
let btnCandidatoCadastro ='[aria-label="Candidato"]'
let btnEmpresaCadastro ='[aria-label="Empresa"]'
let btnQuestoesCadastro ='#root > section > main > section.sc-jdkVqZ.yYmgc > div:nth-child(2) > button:nth-child(4)'
let btnProcessoSeletivoCadastro ='[aria-label="Processo Seletivo"]'

// Botões Listagem
let btnColaboradorListagem = '[aria-label="Colaboradores"]'
let btnCandidatoListagem ='[aria-label="Candidatos"]'
let btnEmpresaListagem ='[aria-label="Empresas"]'
let btnQuestoesListagem ='#root > section > main > section.sc-jdkVqZ.yYmgc > div:nth-child(4) > button:nth-child(4)'


Cypress.Commands.add('clicarNoColaborador', () => {
    
    cy.clicar(btnColaborador)
})