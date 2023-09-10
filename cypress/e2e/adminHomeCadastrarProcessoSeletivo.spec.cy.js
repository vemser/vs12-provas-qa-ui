/// <reference types="cypress"/>
import "../support/commands"

let mensagemCadastroComSucesso

describe('AdminHome', () => {

    beforeEach(() => {
        cy.acessaCadastrarProcessoSeletivo();
        //cy.generateFixture();
        //cy.generateFaleConoscoFixture();
    });

  
    it('CT-WEB-026.1 - Validar Cadastrar Processo Seletivo com sucesso', () => {
        cy.fixture('cadastrarProcessoSeletivo.data.json').then(data => {
            cy.cadastrarProcessoSeletivo(data.nomeProcessoSeletivo, data.dataHoraInicio, data.dataHoraTermino, data.notaDeCorte,
                 data.quantidadeFacil, data.quantidadeMedio, data.quantidadeDificil)
            cy.get(mensagemCadastroComSucesso).contains('Cadastro realizado com sucesso')
        })
    })

    it('CT-WEB-026.2 - Validar Cadastrar Processo Seletivo sem sucesso (Nome do Processo seletivo vazio)', () => {
        
    })

    it('CT-WEB-026.3 - Validar Cadastrar Processo Seletivo sem sucesso (Data inicio vazio)', () => {
        
    })

    it('CT-WEB-026.4 - Validar Cadastrar Processo Seletivo sem sucesso (data termino vazio)', () => {
        
    })

    it('CT-WEB-026.5 - Validar Cadastrar Processo Seletivo sem sucesso (nota de corte vazio)', () => {
        
    })

    it('CT-WEB-026.6 - Validar Cadastrar Processo Seletivo sem sucesso (dificuldade vazio)', () => {
        
    })

    it('CT-WEB-026.7 - Validar Cadastrar Processo Seletivo sem sucesso (quantidade faceis vazio)', () => {
        
    })

    it('CT-WEB-026.8 - Validar Cadastrar Processo Seletivo sem sucesso (quantidade faceis negativo)', () => {
        
    })

    it('CT-WEB-026.9 - Validar Cadastrar Processo Seletivo sem sucesso (quantidade medias vazio)', () => {
        
    })

    it('CT-WEB-026.10- Validar Cadastrar Processo Seletivo sem sucesso (quantidade medias negativo)', () => {
        
    })

    it('CT-WEB-026.11 - Validar Cadastrar Processo Seletivo sem sucesso (quantidade dificeis vazio)', () => {
        
    })

    it('CT-WEB-026.12 - Validar Cadastrar Processo Seletivo sem sucesso (quantidade dificeis negativo)', () => {
        
    })

    
});