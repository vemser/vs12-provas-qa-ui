// Header
let btnLogin = '[data-testid="linkLoginHeader"]'
let btnVoltar = '#root > div > main > a'

// Login
let campoEmailLogin = '[data-testid="inputEmailLogin"]'
let campoSenha = '[data-testid="inputPasswordLogin"]'
let btnEntrar = '[data-testid="btnSubmitLogin"]'
let modalMensagem = '.Toastify__toast-body > :nth-child(2)'

let spanInserirEmailValido = '#root > div > main > fieldset > form > div:nth-child(1) > p'
let spanInserirSenhaValido = '#root > div > main > fieldset > form > div.password > p'
let txtCampoObrigatorio = 'Campo obrigatório'

Cypress.Commands.add('fazerLogin', (usuario) => {
    
    cy.clicar(btnLogin)
    cy.get(btnEntrar).should('be.visible')
    // usuario é o tipo de usuario que está logando podendo ser: ADMIN,GESTOR,MODERADOR e CANDIDATO
    cy.preencherCampo(campoEmailLogin, Cypress.env(`LOGIN_${usuario}`))
    cy.preencherCampo(campoSenha, Cypress.env(`SENHA_${usuario}`))
    cy.clicar(btnEntrar)
})

Cypress.Commands.add('fazerLoginMobile', (usuario) => {
    
    cy.viewport('iphone-6')
    cy.clicar('#root > div > header > div > button')
    cy.wait(2000)
    cy.clicar(':nth-child(6) > .MuiTypography-root > a')
    cy.get(btnEntrar).should('be.visible')
    cy.preencherCampo(campoEmailLogin, Cypress.env(`LOGIN_${usuario}`))
    cy.preencherCampo(campoSenha, Cypress.env(`SENHA_${usuario}`))
    cy.clicar(btnEntrar)
})

Cypress.Commands.add('fazerLoginSemDados', () => {
    
    cy.clicar(btnLogin)
    cy.get(btnEntrar).should('be.visible')
    cy.clicar(btnEntrar)
    cy.contains(spanInserirEmailValido, txtCampoObrigatorio)
    cy.contains(spanInserirSenhaValido, txtCampoObrigatorio)

})

Cypress.Commands.add('fazerLoginSemDadosMobile', () => {
    
    cy.viewport('iphone-6')
    cy.clicar('#root > div > header > div > button')
    cy.wait(2000)
    cy.clicar(':nth-child(6) > .MuiTypography-root > a')
    cy.get(btnEntrar).should('be.visible')
    cy.clicar(btnEntrar)
    cy.contains(spanInserirEmailValido, txtCampoObrigatorio)
    cy.contains(spanInserirSenhaValido, txtCampoObrigatorio)

})

Cypress.Commands.add('fazerLoginSemEmail', (usuario) => {
    
    cy.clicar(btnLogin)
    cy.get(btnEntrar).should('be.visible')
    cy.preencherCampo(campoSenha, Cypress.env(`SENHA_${usuario}`))
    cy.clicar(btnEntrar)
    cy.contains(spanInserirEmailValido, txtCampoObrigatorio)

})

Cypress.Commands.add('fazerLoginSemEmailMobile', (usuario) => {
    
    cy.viewport('iphone-6')
    cy.clicar('#root > div > header > div > button')
    cy.wait(2000)
    cy.clicar(':nth-child(6) > .MuiTypography-root > a')
    cy.get(btnEntrar).should('be.visible')
    cy.preencherCampo(campoSenha, Cypress.env(`SENHA_${usuario}`))
    cy.clicar(btnEntrar)
    cy.contains(spanInserirEmailValido, txtCampoObrigatorio)

})

Cypress.Commands.add('fazerLoginSemSenha', (usuario) => {
    
    cy.clicar(btnLogin)
    cy.get(btnEntrar).should('be.visible')
    cy.preencherCampo(campoEmailLogin, Cypress.env(`LOGIN_${usuario}`))
    cy.clicar(btnEntrar)
    cy.contains(spanInserirSenhaValido, txtCampoObrigatorio)

})

Cypress.Commands.add('fazerLoginSemSenhaMobile', (usuario) => {
    
    cy.viewport('iphone-6')
    cy.clicar('#root > div > header > div > button')
    cy.wait(2000)
    cy.clicar(':nth-child(6) > .MuiTypography-root > a')
    cy.get(btnEntrar).should('be.visible')
    cy.preencherCampo(campoEmailLogin, Cypress.env(`LOGIN_${usuario}`))
    cy.clicar(btnEntrar)
    cy.contains(spanInserirSenhaValido, txtCampoObrigatorio)

})

Cypress.Commands.add('fazerLoginComDadosInvalidos', () => {
    
    cy.clicar(btnLogin)
    cy.get(btnEntrar).should('be.visible')
    cy.preencherCampo(campoEmailLogin, 'exemplo@exemplo.com')
    cy.preencherCampo(campoSenha, '123')
    cy.clicar(btnEntrar)
    cy.contains(modalMensagem, 'Login e/ou senha inválido!')

})

Cypress.Commands.add('fazerLoginComDadosInvalidosMobile', () => {
    
    cy.viewport('iphone-6')
    cy.clicar('#root > div > header > div > button')
    cy.wait(2000)
    cy.clicar(':nth-child(6) > .MuiTypography-root > a')
    cy.get(btnEntrar).should('be.visible')
    cy.preencherCampo(campoEmailLogin, 'exemplo@exemplo.com')
    cy.preencherCampo(campoSenha, '123')
    cy.clicar(btnEntrar)
    cy.contains(modalMensagem, 'Login e/ou senha inválido!')

})

Cypress.Commands.add('clicarBotaoVoltar', () => {
    cy.clicar(btnLogin)
    cy.get(btnEntrar).should('be.visible')
    cy.clicar(btnVoltar)
    cy.url().should('eq', 'http://vemser-dbc.dbccompany.com.br:39000/vemser/vs12-provas-front');

})

Cypress.Commands.add('clicarBotaoVoltarMobile', () => {
    cy.viewport('iphone-6')
    cy.clicar('#root > div > header > div > button')
    cy.wait(2000)
    cy.clicar(':nth-child(6) > .MuiTypography-root > a')
    cy.get(btnEntrar).should('be.visible')
    cy.clicar(btnVoltar)
    cy.url().should('eq', 'http://vemser-dbc.dbccompany.com.br:39000/vemser/vs12-provas-front');

})