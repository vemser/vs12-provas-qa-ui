import { faker } from '@faker-js/faker';

Cypress.Commands.add('gerarDadosDinamicos', () => {
    const fakerBr = require("faker-br")

    cy.writeFile('cypress/fixtures/duvida.data.json', {
        'duvida':Cypress._.times(1, () => {
            return {
                'nome': `${faker.name.firstName()}`,
                'email': `${faker.internet.email()}`,
                'mensagem': `${faker.lorem.text()}`
            }
        })
    })

    cy.writeFile('cypress/fixtures/cadastrarEmpresa.data.json', {
        'cadastroEmpresa':Cypress._.times(1, () => {
            return {
                'nomeFantasia': `${faker.company.name()}`,
                'cnpj': `${fakerBr.br.cnpj()}`,
                'nomeCompleto': `${faker.name.fullName()}`,
                'email': `arnaldotest@gmail.com`
                
            }
        })
    })
})