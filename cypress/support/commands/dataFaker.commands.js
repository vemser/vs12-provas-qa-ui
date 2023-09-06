Cypress.commands.add('gerarDadosDinamicos', () => {
    const faker = require('faker');
    const fakerBr = require('faker-br');

    faker.locale = 'pt_BR';

    cy.writeFile('cypress/fixtures/login.data.json', {
        'candidato':Cypress._.times(1, () => {
            return {
                'email': `${faker.internet.email()}`,
                'senha': `${faker.internet.password()}`
            }
        })
    })
})