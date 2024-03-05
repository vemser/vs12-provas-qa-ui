Cypress.Commands.add('preencherCampo', (elemento, texto) => {
    cy.get(elemento).type(texto);
})

Cypress.Commands.add('clicar', (elemento) => {
    cy.get(elemento).click()
})

Cypress.Commands.add('lerConteudo', (elemento) => {
    return cy.get(elemento).invoke('text');
})

Cypress.Commands.add('limparCampo', (elemento) => {
    cy.get(elemento).clear();
})

Cypress.Commands.add('lerArquivo', (nomeArquivo) => {
    return cy.readFile(`cypress/fixtures/${nomeArquivo}`);
})

Cypress.Commands.add('selecionarOpcao', (elementoSelect, opcao) => {
    return cy.get(elementoSelect).select(opcao);
})