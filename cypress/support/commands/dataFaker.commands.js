import { faker } from '@faker-js/faker';

Cypress.Commands.add('gerarDadosDinamicos', () => {
    cy.writeFile('cypress/fixtures/login.data.json', {
        'candidato':Cypress._.times(1, () => {
            return {
                'email': `${faker.internet.email()}`,
                'senha': `${faker.internet.password()}`
            }
        })
    })
})