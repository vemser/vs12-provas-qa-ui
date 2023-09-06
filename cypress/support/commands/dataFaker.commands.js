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

    cy.writeFile('cypress/fixtures/duvida.data.json', {
        'duvida':Cypress._.times(1, () => {
            return {
                'nome': `${faker.name.firstName()}`,
                'email': `${faker.internet.email()}`,
                'mensagem': `${faker.lorem.text()}`
            }
        })
    })
})