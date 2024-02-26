import { faker } from '@faker-js/faker';


Cypress.Commands.add('gerarDadosDeUsuarios', () => {

    cy.writeFile('cypress/fixtures/user.data.json', {
        //Criando um funcionário moderador
        moderador: {
            'nomeCompleto': faker.person.fullName(),
            'email': faker.internet.email() 
        },
        //Criando uma empresa com um Funcionário Gestor
        gestor: {
            "nome": faker.company.name(),
            "cnpj": faker.number.int(),
            "email": faker.internet.email(),
            "nomeFuncionario": faker.person.fullName()
        },
        //Criando um candidato
        candidato: {
            'nomeCompleto': faker.person.fullName(),
            'email': faker.internet.email()
        },
    })
})