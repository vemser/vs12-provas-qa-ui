/// <reference types="cypress"/>
import "../support/commands"

let mensagemCadastroComSucesso

describe('Admin Home - Cadastrar Processo Seletivo', () => {

    beforeEach(() => {
        cy.acessarCadastrarProcessoSeletivo();
        //cy.generateFixture();
        //cy.generateFaleConoscoFixture();
    });

  
    /*it('CT-WEB-026.1 - Validar Cadastrar Processo Seletivo com sucesso', () => {
        cy.fixture('cadastrarProcessoSeletivo.data.json').then(data => {
            cy.cadastrarProcessoSeletivo(data.nomeProcessoSeletivo, data.dataHoraInicial, data.dataHoraFinal, data.notaDeCorte,
                 data.quantidadeFacil, data.quantidadeMedio, data.quantidadeDificil)
            cy.contains("Cadastro realizado com sucesso").should('be.visible')
        })
    })
*/
    it('CT-WEB-026.2 - Validar Cadastrar Processo Seletivo sem sucesso (Nome do Processo seletivo vazio)', () => {
        cy.fixture('cadastrarProcessoSeletivo.data.json').then(data => {
            cy.cadastrarProcessoSeletivoSemNome(data.dataHoraInicial, data.dataHoraFinal, data.notaDeCorte,
                 data.quantidadeFacil, data.quantidadeMedio, data.quantidadeDificil)
            cy.contains("Campo obrigatório").should('be.visible')
        })
    })

    it('CT-WEB-026.3 - Validar Cadastrar Processo Seletivo sem sucesso (Data inicio vazio)', () => {
        cy.fixture('cadastrarProcessoSeletivo.data.json').then(data => {
            cy.cadastrarProcessoSeletivoSemDataInicio(data.nomeProcessoSeletivo, data.dataHoraFinal, data.notaDeCorte,
                 data.quantidadeFacil, data.quantidadeMedio, data.quantidadeDificil)
                 cy.contains("Campo obrigatório").should('be.visible')
        })
    })

    it('CT-WEB-026.4 - Validar Cadastrar Processo Seletivo sem sucesso (data termino vazio)', () => {
        cy.fixture('cadastrarProcessoSeletivo.data.json').then(data => {
            cy.cadastrarProcessoSeletivoSemDataFinal(data.nomeProcessoSeletivo, data.dataHoraInicial, data.notaDeCorte,
                 data.quantidadeFacil, data.quantidadeMedio, data.quantidadeDificil)
                 cy.contains("Campo obrigatório").should('be.visible')
        })
    })

    it('CT-WEB-026.5 - Validar Cadastrar Processo Seletivo sem sucesso (nota de corte vazio)', () => {
        cy.fixture('cadastrarProcessoSeletivo.data.json').then(data => {
            cy.cadastrarProcessoSeletivoSemNotaCorte(data.nomeProcessoSeletivo, data.dataHoraInicial, data.dataHoraFinal,
                 data.quantidadeFacil, data.quantidadeMedio, data.quantidadeDificil)
                 cy.contains("Campo obrigatório").should('be.visible')
        })
    })

    it('CT-WEB-026.6 - Validar Cadastrar Processo Seletivo sem sucesso (dificuldade vazio)', () => {
        cy.fixture('cadastrarProcessoSeletivo.data.json').then(data => {
            cy.cadastrarProcessoSeletivoSemDificuldade(data.nomeProcessoSeletivo, data.dataHoraInicial, data.dataHoraFinal, data.notaDeCorte,
                 data.quantidadeFacil, data.quantidadeMedio, data.quantidadeDificil)
                 cy.contains("Campo obrigatório").should('be.visible')
        })
    })

    it('CT-WEB-xxx.x - Validar Cadastrar Processo Seletivo sem sucesso (tema vazio)', () => {
        cy.fixture('cadastrarProcessoSeletivo.data.json').then(data => {
            cy.cadastrarProcessoSeletivoSemTema(data.nomeProcessoSeletivo, data.dataHoraInicial, data.dataHoraFinal, data.notaDeCorte,
                 data.quantidadeFacil, data.quantidadeMedio, data.quantidadeDificil)
                 cy.contains("Campo obrigatório").should('be.visible')
        })
    })

    it('CT-WEB-026.7 - Validar Cadastrar Processo Seletivo sem sucesso (quantidade faceis vazio)', () => {
        cy.fixture('cadastrarProcessoSeletivo.data.json').then(data => {
            cy.cadastrarProcessoSeletivoSemFacil(data.nomeProcessoSeletivo, data.dataHoraInicial, data.dataHoraFinal, data.notaDeCorte, data.quantidadeMedio, data.quantidadeDificil)
                 cy.contains("Campo obrigatório").should('be.visible')
        })
    })

    it('CT-WEB-026.8 - Validar Cadastrar Processo Seletivo sem sucesso (quantidade faceis negativo)', () => {
        cy.fixture('cadastrarProcessoSeletivo.data.json').then(data => {
            cy.cadastrarProcessoSeletivo(data.nomeProcessoSeletivo, data.dataHoraInicial, data.dataHoraFinal, data.notaDeCorte, "-1", data.quantidadeMedio, data.quantidadeDificil)
                 cy.contains("Quantidade miníma é 0").should('be.visible')
        })
    })

    it('CT-WEB-026.9 - Validar Cadastrar Processo Seletivo sem sucesso (quantidade medias vazio)', () => {
        cy.fixture('cadastrarProcessoSeletivo.data.json').then(data => {
            cy.cadastrarProcessoSeletivoSemMedio(data.nomeProcessoSeletivo, data.dataHoraInicial, data.dataHoraFinal, data.notaDeCorte,
                 data.quantidadeFacil, data.quantidadeDificil)
                 cy.contains("Campo obrigatório").should('be.visible')
        })
    })

    it('CT-WEB-026.10- Validar Cadastrar Processo Seletivo sem sucesso (quantidade medias negativo)', () => {
        cy.fixture('cadastrarProcessoSeletivo.data.json').then(data => {
            cy.cadastrarProcessoSeletivo(data.nomeProcessoSeletivo, data.dataHoraInicial, data.dataHoraFinal, data.notaDeCorte,
                 data.quantidadeFacil, "-1", data.quantidadeDificil)
                 cy.contains("Quantidade miníma é 0").should('be.visible')
        })
    })

    it('CT-WEB-026.11 - Validar Cadastrar Processo Seletivo sem sucesso (quantidade dificeis vazio)', () => {
        cy.fixture('cadastrarProcessoSeletivo.data.json').then(data => {
            cy.cadastrarProcessoSeletivoSemDificil(data.nomeProcessoSeletivo, data.dataHoraInicial, data.dataHoraFinal, data.notaDeCorte,
                 data.quantidadeFacil, data.quantidadeMedio)
                 cy.contains("Campo obrigatório").should('be.visible')
        })
    })

    it('CT-WEB-026.12 - Validar Cadastrar Processo Seletivo sem sucesso (quantidade dificeis negativo)', () => {
        cy.fixture('cadastrarProcessoSeletivo.data.json').then(data => {
            cy.cadastrarProcessoSeletivo(data.nomeProcessoSeletivo, data.dataHoraInicial, data.dataHoraFinal, data.notaDeCorte,
                 data.quantidadeFacil, data.quantidadeMedio, "-1")
                 cy.contains("Quantidade miníma é 0").should('be.visible')
        })
    })

    
});