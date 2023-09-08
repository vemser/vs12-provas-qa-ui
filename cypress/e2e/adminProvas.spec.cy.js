/// <reference types="cypress"/>

let mensagemCadastroComSucesso
let mensagemCadastroSemSucesso
let descricaoTelaCadastrarQuestoes
let descricaoTelaCadastrarProcesso
let descricaoTelaListarQuestoes
let descricaoTelaListarProvas
let descricaoTelaHome
let descricaoTelaExportar
let descricaoTelaPerfil
let elementoLandingPage

describe('AdminProvas', () => {

    beforeEach(() => {
        cy.realizarLoginAdmin();
        cy.acessarProvas();
        cy.generateFixture();
        cy.generateFaleConoscoFixture();
    });


    it('CT-WEB-033.1 - Validar botão "Cadastrar questões" com sucesso', () => {
        cy.acessarCadastrarQuestoes()
        cy.get(descricaoTelaCadastrarQuestoes).contains("Cadastrar Questões")
    })

    it('CT-WEB-034.1 - Validar "Cadastrar questões" com sucesso', () => {
        cy.fixture('cadastrarQuestao.data.json').then(data => {
            cy.acessarCadastrarQuestoes()
            cy.cadastrarQuestao(data.titulo, data.enunciado, data.alternativa1, data.alternativa2)
            cy.get(mensagemCadastroComSucesso).contains('Cadastro realizado com sucesso')
        })
    })

    it('CT-WEB-034.2 - Validar "Cadastrar questões" sem sucesso (Titulo vazio)', () => {
        cy.fixture('cadastrarQuestao.data.json').then(data => {
            cy.acessarCadastrarQuestoes()
            cy.cadastrarQuestao("", data.enunciado, data.alternativa1, data.alternativa2)
            cy.get(mensagemCadastroSemSucesso).contains('Erro ao realizar cadastro')
        })
    })

    it('CT-WEB-034.3 - Validar "Cadastrar questões" sem sucesso (Tema vazio)', () => {
        cy.fixture('cadastrarQuestao.data.json').then(data => {
            cy.acessarCadastrarQuestoes()
            cy.cadastrarQuestaoTemaVazio(data.titulo, data.enunciado, data.alternativa1, data.alternativa2)
            cy.get(mensagemCadastroSemSucesso).contains('Erro ao realizar cadastro')
        })
    })

    it('CT-WEB-034.4 - Validar "Cadastrar questões" sem sucesso (Dificuldade vazio)', () => {
        cy.fixture('cadastrarQuestao.data.json').then(data => {
            cy.acessarCadastrarQuestoes()
            cy.cadastrarQuestaoDificuldadeVazio(data.titulo, data.enunciado, data.alternativa1, data.alternativa2)
            cy.get(mensagemCadastroSemSucesso).contains('Erro ao realizar cadastro')
        })
    })

    it('CT-WEB-034.5 - Validar "Cadastrar questões" sem sucesso (Não selecionar alternativa correta)', () => {
        cy.fixture('cadastrarQuestao.data.json').then(data => {
            cy.acessarCadastrarQuestoes()
            cy.cadastrarQuestaoSemCorreta(data.titulo, data.enunciado, data.alternativa1, data.alternativa2)
            cy.get(mensagemCadastroSemSucesso).contains('Erro ao realizar cadastro')
        })
    })

    it('CT-WEB-034.6 - Validar "Cadastrar questões" sem sucesso (Selecionar alternativa correta vazia)', () => {
        cy.fixture('cadastrarQuestao.data.json').then(data => {
            cy.acessarCadastrarQuestoes()
            cy.cadastrarQuestaoCorretaVazia(data.titulo, data.enunciado, data.alternativa1, data.alternativa2)
            cy.get(mensagemCadastroSemSucesso).contains('Erro ao realizar cadastro')
        })
    })

    it('CT-WEB-034.7 - Validar "Cadastrar questões" sem sucesso (Preencher apenas uma alternativa)', () => {
        cy.fixture('cadastrarQuestao.data.json').then(data => {
            cy.acessarCadastrarQuestoes()
            cy.cadastrarQuestao(data.titulo, data.enunciado, data.alternativa1, "")
            cy.get(mensagemCadastroSemSucesso).contains('Erro ao realizar cadastro')
        })
    })

    it('CT-WEB-034.8 - Validar "Cadastrar questões" sem sucesso (Enunciado vazio)', () => {
        cy.fixture('cadastrarQuestao.data.json').then(data => {
            cy.acessarCadastrarQuestoes()
            cy.cadastrarQuestao(data.titulo, "", data.alternativa1, data.alternativa2)
            cy.get(mensagemCadastroSemSucesso).contains('Erro ao realizar cadastro')
        })
    })

    it('CT-WEB-035.1 - Validar botão "Cadastrar Processo Seletivo" com sucesso', () => {
        cy.acessarCadastrarProcessoSeletivo()
        cy.get(descricaoTelaCadastrarProcesso).contains('Cadastrar Processo Seletivo')
    })

    it('CT-WEB-036.1 - Validar Cadastrar Processo Seletivo com sucesso', () => {
        cy.fixture('cadastrarProcessoSeletivo.data.json').then(data => {
            cy.acessarCadastrarProcessoSeletivo()
            cy.cadastrarProcessoSeletivo(data.nomeProcessoSeletivo, data.dataHoraInicio, data.dataHoraTermino, data.notaDeCorte,
                 data.quantidadeFacil, data.quantidadeMedio, data.quantidadeDificil)
            cy.get(mensagemCadastroComSucesso).contains('Cadastro realizado com sucesso')
        })
    })

    it('CT-WEB-036.2 - Validar Cadastrar Processo Seletivo sem sucesso (Nome do Processo seletivo vazio)', () => {
        cy.fixture('cadastrarProcessoSeletivo.data.json').then(data => {
            cy.acessarCadastrarProcessoSeletivo()
            cy.cadastrarProcessoSeletivo("", data.dataHoraInicio, data.dataHoraTermino, data.notaDeCorte,
                 data.quantidadeFacil, data.quantidadeMedio, data.quantidadeDificil)
            cy.get(mensagemCadastroSemSucesso).contains('Erro ao realizar cadastro')
        })
    })

    it('CT-WEB-036.3 - Validar Cadastrar Processo Seletivo sem sucesso (Data inicio vazio)', () => {
        cy.fixture('cadastrarProcessoSeletivo.data.json').then(data => {
            cy.acessarCadastrarProcessoSeletivo()
            cy.cadastrarProcessoSeletivo(data.nomeProcessoSeletivo, "", data.dataHoraTermino, data.notaDeCorte,
                 data.quantidadeFacil, data.quantidadeMedio, data.quantidadeDificil)
            cy.get(mensagemCadastroSemSucesso).contains('Erro ao realizar cadastro')
        })
    })

    it('CT-WEB-036.4 - Validar Cadastrar Processo Seletivo sem sucesso (data termino vazio)', () => {
        cy.fixture('cadastrarProcessoSeletivo.data.json').then(data => {
            cy.acessarCadastrarProcessoSeletivo()
            cy.cadastrarProcessoSeletivo(data.nomeProcessoSeletivo, data.dataHoraInicio, "", data.notaDeCorte,
                 data.quantidadeFacil, data.quantidadeMedio, data.quantidadeDificil)
            cy.get(mensagemCadastroSemSucesso).contains('Erro ao realizar cadastro')
        })
    })

    it('CT-WEB-036.5 - Validar Cadastrar Processo Seletivo sem sucesso (nota de corte vazio)', () => {
        cy.fixture('cadastrarProcessoSeletivo.data.json').then(data => {
            cy.acessarCadastrarProcessoSeletivo()
            cy.cadastrarProcessoSeletivo(data.nomeProcessoSeletivo, data.dataHoraInicio, data.dataHoraTermino, "",
                 data.quantidadeFacil, data.quantidadeMedio, data.quantidadeDificil)
            cy.get(mensagemCadastroSemSucesso).contains('Erro ao realizar cadastro')
        })
    })

    it('CT-WEB-036.6 - Validar Cadastrar Processo Seletivo sem sucesso (dificuldade vazio)', () => {
        cy.fixture('cadastrarProcessoSeletivo.data.json').then(data => {
            cy.acessarCadastrarProcessoSeletivo()
            cy.cadastrarProcessoSeletivoDificuldadeVazio(data.nomeProcessoSeletivo, data.dataHoraInicio, data.dataHoraTermino, data.notaDeCorte,
                 data.quantidadeFacil, data.quantidadeMedio, data.quantidadeDificil)
            cy.get(mensagemCadastroSemSucesso).contains('Erro ao realizar cadastro')
        })
    })

    it('CT-WEB-036.7 - Validar Cadastrar Processo Seletivo sem sucesso (quantidade faceis vazio)', () => {
        cy.fixture('cadastrarProcessoSeletivo.data.json').then(data => {
            cy.acessarCadastrarProcessoSeletivo()
            cy.cadastrarProcessoSeletivo(data.nomeProcessoSeletivo, data.dataHoraInicio, data.dataHoraTermino, data.notaDeCorte,
                 "", data.quantidadeMedio, data.quantidadeDificil)
            cy.get(mensagemCadastroSemSucesso).contains('Erro ao realizar cadastro')
        })
    })

    it('CT-WEB-036.8 - Validar Cadastrar Processo Seletivo sem sucesso (quantidade faceis negativo)', () => {
        cy.fixture('cadastrarProcessoSeletivo.data.json').then(data => {
            cy.acessarCadastrarProcessoSeletivo()
            cy.cadastrarProcessoSeletivo(data.nomeProcessoSeletivo, data.dataHoraInicio, data.dataHoraTermino, data.notaDeCorte,
                 data.quantidadeFacilNeg, data.quantidadeMedio, data.quantidadeDificil)
            cy.get(mensagemCadastroSemSucesso).contains('Erro ao realizar cadastro')
        })
    })

    it('CT-WEB-036.9 - Validar Cadastrar Processo Seletivo sem sucesso (quantidade medias vazio)', () => {
        cy.fixture('cadastrarProcessoSeletivo.data.json').then(data => {
            cy.acessarCadastrarProcessoSeletivo()
            cy.cadastrarProcessoSeletivo(data.nomeProcessoSeletivo, data.dataHoraInicio, data.dataHoraTermino, data.notaDeCorte,
                 data.quantidadeFacil, "", data.quantidadeDificil)
            cy.get(mensagemCadastroSemSucesso).contains('Erro ao realizar cadastro')
        })
    })

    it('CT-WEB-036.10- Validar Cadastrar Processo Seletivo sem sucesso (quantidade medias negativo)', () => {
        cy.fixture('cadastrarProcessoSeletivo.data.json').then(data => {
            cy.acessarCadastrarProcessoSeletivo()
            cy.cadastrarProcessoSeletivo(data.nomeProcessoSeletivo, data.dataHoraInicio, data.dataHoraTermino, data.notaDeCorte,
                 data.quantidadeFacil, data.quantidadeMedioNeg, data.quantidadeDificil)
            cy.get(mensagemCadastroSemSucesso).contains('Erro ao realizar cadastro')
        })
    })

    it('CT-WEB-036.11 - Validar Cadastrar Processo Seletivo sem sucesso (quantidade dificeis vazio)', () => {
        cy.fixture('cadastrarProcessoSeletivo.data.json').then(data => {
            cy.acessarCadastrarProcessoSeletivo()
            cy.cadastrarProcessoSeletivo(data.nomeProcessoSeletivo, data.dataHoraInicio, data.dataHoraTermino, data.notaDeCorte,
                 data.quantidadeFacil, data.quantidadeMedio, "")
            cy.get(mensagemCadastroSemSucesso).contains('Erro ao realizar cadastro')
        })
    })

    it('CT-WEB-036.12 - Validar Cadastrar Processo Seletivo sem sucesso (quantidade dificeis negativo)', () => {
        cy.fixture('cadastrarProcessoSeletivo.data.json').then(data => {
            cy.acessarCadastrarProcessoSeletivo()
            cy.cadastrarProcessoSeletivo(data.nomeProcessoSeletivo, data.dataHoraInicio, data.dataHoraTermino, data.notaDeCorte,
                 data.quantidadeFacil, data.quantidadeMedio, data.quantidadeDificil)
            cy.get(mensagemCadastroSemSucesso).contains('Erro ao realizar cadastro')
        })
    })

    it('CT-WEB-037.1 - Validar botão "Listar Questões" com sucesso', () => {
        cy.acessarListarQuestoes()
        cy.get(descricaoTelaListarQuestoes).contains('Listar Questões')
    })

    //it('CT-WEB-038.1 - Validar "Listar Questões" com sucesso (pesquisar por titulo cadastrado)', () => {
    //})

    //it('CT-WEB-038.2 - Validar "Listar Questões" sem sucesso (pesquisar por titulo não cadastrado)', () => {
    //})

    it('CT-WEB-039.1 - Validar botão "Listar Provas" com sucesso', () => {
        cy.acessarListarProvas()
        cy.get(descricaoTelaListarProvas).contains('Listar Provas')
    })

    //it('CT-WEB-040.1 - Validar "Listar Provas" com sucesso (pesquisar nome cadastrado)', () => {
    //})

    //it('CT-WEB-040.2 - Validar "Listar Provas" sem sucesso (pesquisar nome não cadastrado)', () => {
    //})

    it('CT-WEB-041.1 - Validar botão "Home" com sucesso', () => {
        cy.acessarHome()
        cy.get(descricaoTelaHome).contains('Home')
    })

    it('CT-WEB-042.1 - Validar botão "Exportar" com sucesso', () => {
        cy.acessarExportar()
        cy.get(descricaoTelaExportar).contains('Exportar')
    })

    it('CT-WEB-043.1 - Validar botão "Perfil" com sucesso', () => {
        cy.acessarPerfil()
        cy.get(descricaoTelaPerfil).contains('Perfil')
    })

    it('CT-WEB-044.1 - Validar botão "Sair" com sucesso', () => {
        cy.acessarSair()
        cy.get(elementoLandingPage).contains('DBC Provas')
    })
});