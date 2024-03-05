import { faker } from '@faker-js/faker';

const fakerBr = require('faker-br');

Cypress.Commands.add('gerarDadosDeUsuarios', () => {

    cy.writeFile('cypress/fixtures/user.data.json', {
        //Criando um funcionário (gestor,moderador)
        funcionario: {
            'empresa': faker.number.int({ min: 1, max: 150 }),
            'nomeCompleto': faker.person.fullName(),
            'email': faker.internet.email(),
            'cargo': faker.number.int({ min: 1, max: 2 })
        },
        //Criando um candidato
        candidato: {
            'nomeCompleto': faker.person.fullName(),
            'email': faker.internet.email()
        },
    })
})