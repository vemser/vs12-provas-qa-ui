import { faker } from '@faker-js/faker';


Cypress.Commands.add('gerarDadosDeQuestao', () => {

    cy.writeFile('cypress/fixtures/questao.data.json', {
        //Criando um funcionário moderador
        questao: {
            "titulo": faker.lorem.words({ min: 1, max: 3}),
            "enunciado":faker.lorem.paragraph(),
            "tema01":faker.number.int({ min: 1, max: 15}),
            "tema02":faker.number.int({ min: 1, max: 25}),
            "tema03":faker.number.int({ min: 1, max: 25}),
            "dificuldade": "MEDIA",
            "alternativa01":faker.lorem.words({ min: 1, max: 3}),
            "alternativa02":faker.lorem.words({ min: 1, max: 3}),
            "alternativa03":faker.lorem.words({ min: 1, max: 3}),
            "correta":faker.number.int({ min: 1, max: 3}),
        }
    })
})