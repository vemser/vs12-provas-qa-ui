import { faker } from '@faker-js/faker';


Cypress.Commands.add('gerarDadosDeProcesso', () => {

    cy.writeFile('cypress/fixtures/processo.data.json', {
        //Criando um funcionário moderador
        processo: {
            "empresa": faker.number.int({ min: 0, max: 70}),
            "nomeProcessoSeletivo":"nome processo teste",
            "dataHoraInicial":faker.date.recent(),
            "dataHoraFinal":faker.date.future(),
            "notaDeCorte":faker.number.int({ min: 50, max: 80}),
            "tema":faker.number.int({ min: 0, max: 25}),
            "quantidadeFacil":faker.number.int({ min: 0, max: 10}),
            "quantidadeMedio":faker.number.int({ min: 0, max: 10}),
            "quantidadeDificil":faker.number.int({ min: 0, max: 10})
        }
    })
})