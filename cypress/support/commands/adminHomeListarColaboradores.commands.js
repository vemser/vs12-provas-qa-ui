// Mapeamento
let btnVoltar = ".back";
let btnVoltarPaginacao = '.MuiPagination-ul > :nth-child(1)';
let btnAvancarPaginacao = '.MuiPagination-ul > :nth-child(2)';


// Ações
Cypress.Commands.add('clicarBtnVoltar', () => {
    cy.get(btnEntrar).click()
})

Cypress.Commands.add('clicarBtnVoltarPaginacao', () => {
    cy.get(btnVoltarPaginacao).click()
})

Cypress.Commands.add('clicarBtnAvancarPaginacao', () => {
    cy.get(btnAvancarPaginacao).click()
})