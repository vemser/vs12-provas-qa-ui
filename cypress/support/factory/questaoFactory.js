import { faker } from '@faker-js/faker';


Cypress.Commands.add('gerarDadosDeQuestao', () => {

    cy.writeFile('cypress/fixtures/questao.data.json', {
        //Criando um funcionário moderador
        questao: {
            "titulo": faker.lorem.words({ min: 1, max: 4}),
            "enunciado":faker.lorem.paragraph(),
            "tema":faker.number.int({ min: 0, max: 15}),
            "dificuldade": "MEDIA",
            "alternativa01":faker.lorem.words({ min: 1, max: 3}),
            "alternativa02":faker.lorem.words({ min: 1, max: 3}),
            "alternativa03":faker.lorem.words({ min: 1, max: 3}),
            "correta":faker.number.int({ min: 1, max: 3}),
        }
    })
})