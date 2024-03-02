import { faker } from '@faker-js/faker';


Cypress.Commands.add('gerarDadosDeProcesso', () => {

    cy.writeFile('cypress/fixtures/processo.data.json', {
        //Criando um funcionário moderador
        processo: {
            "empresa": faker.number.int({ min: 0, max: 70}),
            "nomeProcessoSeletivo":faker.lorem.words({ min: 1, max: 4}),
            "dataHoraInicial":faker.date.recent().toISOString().slice(0, 16),
            "dataHoraFinal":faker.date.future().toISOString().slice(0, 16),
            "notaDeCorte":faker.number.int({ min: 50, max: 80}),
            "dificuldade": "MEDIO",
            "tema":faker.number.int({ min: 0, max: 25}),
            "quantidadeFacil":faker.number.int({ min: 0, max: 100}),
            "quantidadeMedio":faker.number.int({ min: 0, max: 100}),
            "quantidadeDificil":faker.number.int({ min: 0, max: 100})
        }
    })
})