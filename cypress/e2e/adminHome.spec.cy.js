/// <reference types="cypress"/>
import "../support/commands"

let campoEmailLogin = '#email'
let campoSenha = '[data-testid="input-password-form"]'
let btnEntrar = '.sc-hTJqdO'

let descricaoTelaCadastrarFuncionario
let mensagemCadastroComSucesso
let mensagemCadastroSemSucesso
let descricaoTelaCadastrarQuestoes
let descricaoTelaCadastrarEmpresa
let descricaoTelaCadastrarProcesso
let descricaoTelaListarCadastros
let descricaoTelaProvas = '.sc-gSkWNA > :nth-child(2)'
let descricaoTelaExportar = '.sc-gSkWNA > :nth-child(2)'
let descricaoTelaPerfil = '.sc-gSkWNA > :nth-child(2)'
let elementoLandingPage = '.sc-gSkWNA > :nth-child(2)'

describe('AdminHome', () => {

    beforeEach(() => {
        //cy.realizarLoginAdmin();
        cy.visit("/login")
        cy.get(campoEmailLogin).type("admin@email.com")
        cy.get(campoSenha).type("Provas123")
        cy.get(btnEntrar).click()
        //cy.generateFixture();
        //cy.generateFaleConoscoFixture();
    });

    /*
    it('CT-WEB-020.1 - Validar botão "Cadastrar funcionario" com sucesso', () => {
        cy.acessarCadastrarUsuario();
        cy.get(descricaoTelaCadastrarFuncionario).contains('Cadastrar Funcionario')
    })

    it('CT-WEB-021.1 - Validar "Cadastrar funcionario" com sucesso', () => {
        cy.fixture('cadastrarFuncionario.data.json').then(data => {
            cy.acessarCadastrarUsuario();
            cy.cadastrarFuncionario(data.nomeCompleto, data.email)
            cy.get(mensagemCadastroComSucesso).contains('Cadastro realizado com sucesso')
        })
    })

    it('CT-WEB-021.2 - Validar "Cadastrar funcionario" sem sucesso (Todos campos vazios)', () => {
        cy.acessarCadastrarUsuario();
        cy.cadastrarFuncionarioTudoVazio("", "")
        cy.get(mensagemCadastroSemSucesso).contains('Erro ao realizar cadastro')
    })

    it('CT-WEB-021.3 - Validar "Cadastrar funcionario" sem sucesso (Empresa vazio)', () => {
        cy.fixture('cadastrarFuncionario.data.json').then(data => {
            cy.acessarCadastrarUsuario();
            cy.cadastrarFuncionarioEmpresaVazio(data.nomeCompleto, data.email)
            cy.get(mensagemCadastroSemSucesso).contains('Erro ao realizar cadastro')
        })
    })

    it('CT-WEB-021.4 - Validar "Cadastrar funcionario" sem sucesso (Nome vazio)', () => {
        cy.fixture('cadastrarFuncionario.data.json').then(data => {
            cy.acessarCadastrarUsuario();
            cy.cadastrarFuncionario("", data.email)
            cy.get(mensagemCadastroSemSucesso).contains('Erro ao realizar cadastro')
        })
    })

    it('CT-WEB-021.5 - Validar "Cadastrar funcionario" sem sucesso (E-mail vazio)', () => {
        cy.fixture('cadastrarFuncionario.data.json').then(data => {
            cy.acessarCadastrarUsuario();
            cy.cadastrarFuncionario(data.nomeCompleto, "")
            cy.get(mensagemCadastroSemSucesso).contains('Erro ao realizar cadastro')
        })
    })

    it('CT-WEB-021.6 - Validar "Cadastrar funcionario" sem sucesso (Cargo vazio)', () => {
        cy.fixture('cadastrarFuncionario.data.json').then(data => {
            cy.acessarCadastrarUsuario();
            cy.cadastrarFuncionarioCargoVazio(data.nomeCompleto, data.email)
            cy.get(mensagemCadastroSemSucesso).contains('Erro ao realizar cadastro')
        })
    })

    it('CT-WEB-022.0 - Validar botão "Cadastrar questões" com sucesso', () => {
        cy.acessarCadastrarQuestoes()
        cy.get(descricaoTelaCadastrarQuestoes).contains("Cadastrar Questões")
    })

    it('CT-WEB-022.1 - Validar "Cadastrar questões" com sucesso', () => {
        cy.fixture('cadastrarQuestao.data.json').then(data => {
            cy.acessarCadastrarQuestoes()
            cy.cadastrarQuestao(data.titulo, data.enunciado, data.alternativa1, data.alternativa2)
            cy.get(mensagemCadastroComSucesso).contains('Cadastro realizado com sucesso')
        })
    })

    it('CT-WEB-022.2 - Validar "Cadastrar questões" sem sucesso (Titulo vazio)', () => {
        cy.fixture('cadastrarQuestao.data.json').then(data => {
            cy.acessarCadastrarQuestoes()
            cy.cadastrarQuestao("", data.enunciado, data.alternativa1, data.alternativa2)
            cy.get(mensagemCadastroSemSucesso).contains('Erro ao realizar cadastro')
        })
    })

    it('CT-WEB-022.3 - Validar "Cadastrar questões" sem sucesso (Tema vazio)', () => {
        cy.fixture('cadastrarQuestao.data.json').then(data => {
            cy.acessarCadastrarQuestoes()
            cy.cadastrarQuestaoTemaVazio(data.titulo, data.enunciado, data.alternativa1, data.alternativa2)
            cy.get(mensagemCadastroSemSucesso).contains('Erro ao realizar cadastro')
        })
    })

    it('CT-WEB-022.4 - Validar "Cadastrar questões" sem sucesso (Dificuldade vazio)', () => {
        cy.fixture('cadastrarQuestao.data.json').then(data => {
            cy.acessarCadastrarQuestoes()
            cy.cadastrarQuestaoDificuldadeVazio(data.titulo, data.enunciado, data.alternativa1, data.alternativa2)
            cy.get(mensagemCadastroSemSucesso).contains('Erro ao realizar cadastro')
        })
    })

    it('CT-WEB-022.5 - Validar "Cadastrar questões" sem sucesso (Não selecionar alternativa correta)', () => {
        cy.fixture('cadastrarQuestao.data.json').then(data => {
            cy.acessarCadastrarQuestoes()
            cy.cadastrarQuestaoSemCorreta(data.titulo, data.enunciado, data.alternativa1, data.alternativa2)
            cy.get(mensagemCadastroSemSucesso).contains('Erro ao realizar cadastro')
        })
    })

    it('CT-WEB-022.6 - Validar "Cadastrar questões" sem sucesso (Selecionar alternativa correta vazia)', () => {
        cy.fixture('cadastrarQuestao.data.json').then(data => {
            cy.acessarCadastrarQuestoes()
            cy.cadastrarQuestaoCorretaVazia(data.titulo, data.enunciado, data.alternativa1, data.alternativa2)
            cy.get(mensagemCadastroSemSucesso).contains('Erro ao realizar cadastro')
        })
    })

    it('CT-WEB-022.7 - Validar "Cadastrar questões" sem sucesso (Preencher apenas uma alternativa)', () => {
        cy.fixture('cadastrarQuestao.data.json').then(data => {
            cy.acessarCadastrarQuestoes()
            cy.cadastrarQuestao(data.titulo, data.enunciado, data.alternativa1, "")
            cy.get(mensagemCadastroSemSucesso).contains('Erro ao realizar cadastro')
        })
    })

    it('CT-WEB-022.8 - Validar "Cadastrar questões" sem sucesso (Enunciado vazio)', () => {
        cy.fixture('cadastrarQuestao.data.json').then(data => {
            cy.acessarCadastrarQuestoes()
            cy.cadastrarQuestao(data.titulo, "", data.alternativa1, data.alternativa2)
            cy.get(mensagemCadastroSemSucesso).contains('Erro ao realizar cadastro')
        })
    })

    it('CT-WEB-023.1 - Validar botão "Cadastrar empresa" com sucesso', () => {
        cy.acessarCadastrarEmpresa()
        cy.get(descricaoTelaCadastrarEmpresa).contains('Cadastrar Questões')
    })

    it('CT-WEB-024.1 - Validar "Cadastrar empresa" com sucesso', () => {
        cy.fixture('cadastrarEmpresa.data.json').then(data => {
            cy.acessarCadastrarEmpresa()
            cy.cadastrarEmpresa(data.nomeFantasia, data.cnpj, data.nomeCompleto, data.email)
            cy.get(mensagemCadastroComSucesso).contains('Cadastro realizado com sucesso')
        })
    })

    it('CT-WEB-024.2 - Validar "Cadastrar empresa" sem sucesso (Nome Fantasia vazio)', () => {
        cy.fixture('cadastrarEmpresa.data.json').then(data => {
            cy.acessarCadastrarEmpresa()
            cy.cadastrarEmpresa("", data.cnpj, data.nomeCompleto, data.email)
            cy.get(mensagemCadastroSemSucesso).contains('Erro ao realizar cadastro')
        })
    })

    it('CT-WEB-024.3 - Validar "Cadastrar empresa" sem sucesso (CNPJ vazio)', () => {
        cy.fixture('cadastrarEmpresa.data.json').then(data => {
            cy.acessarCadastrarEmpresa()
            cy.cadastrarEmpresa(data.nomeFantasia, "", data.nomeCompleto, data.email)
            cy.get(mensagemCadastroSemSucesso).contains('Erro ao realizar cadastro')
        })
    })

    it('CT-WEB-024.4 - Validar "Cadastrar empresa" sem sucesso (Nome gestor vazio)', () => {
        cy.fixture('cadastrarEmpresa.data.json').then(data => {
            cy.acessarCadastrarEmpresa()
            cy.cadastrarEmpresa(data.nomeFantasia, data.cnpj, "", data.email)
            cy.get(mensagemCadastroSemSucesso).contains('Erro ao realizar cadastro')
        })
    })

    it('CT-WEB-024.5 - Validar "Cadastrar empresa" sem sucesso (E-mail vazio)', () => {
        cy.fixture('cadastrarEmpresa.data.json').then(data => {
            cy.acessarCadastrarEmpresa()
            cy.cadastrarEmpresa(data.nomeFantasia, data.cnpj, data.nomeCompleto, "")
            cy.get(mensagemCadastroSemSucesso).contains('Erro ao realizar cadastro')
        })
    })

    it('CT-WEB-025.1 - Validar botão "Cadastrar Processo Seletivo" com sucesso', () => {
        cy.acessarCadastrarProcessoSeletivo()
        cy.get(descricaoTelaCadastrarProcesso).contains('Cadastrar Processo Seletivo')
    })

    it('CT-WEB-026.1 - Validar Cadastrar Processo Seletivo com sucesso', () => {
        cy.fixture('cadastrarProcessoSeletivo.data.json').then(data => {
            cy.acessarCadastrarProcessoSeletivo()
            cy.cadastrarProcessoSeletivo(data.nomeProcessoSeletivo, data.dataHoraInicio, data.dataHoraTermino, data.notaDeCorte,
                 data.quantidadeFacil, data.quantidadeMedio, data.quantidadeDificil)
            cy.get(mensagemCadastroComSucesso).contains('Cadastro realizado com sucesso')
        })
    })

    it('CT-WEB-026.2 - Validar Cadastrar Processo Seletivo sem sucesso (Nome do Processo seletivo vazio)', () => {
        cy.fixture('cadastrarProcessoSeletivo.data.json').then(data => {
            cy.acessarCadastrarProcessoSeletivo()
            cy.cadastrarProcessoSeletivo("", data.dataHoraInicio, data.dataHoraTermino, data.notaDeCorte,
                 data.quantidadeFacil, data.quantidadeMedio, data.quantidadeDificil)
            cy.get(mensagemCadastroSemSucesso).contains('Erro ao realizar cadastro')
        })
    })

    it('CT-WEB-026.3 - Validar Cadastrar Processo Seletivo sem sucesso (Data inicio vazio)', () => {
        cy.fixture('cadastrarProcessoSeletivo.data.json').then(data => {
            cy.acessarCadastrarProcessoSeletivo()
            cy.cadastrarProcessoSeletivo(data.nomeProcessoSeletivo, "", data.dataHoraTermino, data.notaDeCorte,
                 data.quantidadeFacil, data.quantidadeMedio, data.quantidadeDificil)
            cy.get(mensagemCadastroSemSucesso).contains('Erro ao realizar cadastro')
        })
    })

    it('CT-WEB-026.4 - Validar Cadastrar Processo Seletivo sem sucesso (data termino vazio)', () => {
        cy.fixture('cadastrarProcessoSeletivo.data.json').then(data => {
            cy.acessarCadastrarProcessoSeletivo()
            cy.cadastrarProcessoSeletivo(data.nomeProcessoSeletivo, data.dataHoraInicio, "", data.notaDeCorte,
                 data.quantidadeFacil, data.quantidadeMedio, data.quantidadeDificil)
            cy.get(mensagemCadastroSemSucesso).contains('Erro ao realizar cadastro')
        })
    })

    it('CT-WEB-026.5 - Validar Cadastrar Processo Seletivo sem sucesso (nota de corte vazio)', () => {
        cy.fixture('cadastrarProcessoSeletivo.data.json').then(data => {
            cy.acessarCadastrarProcessoSeletivo()
            cy.cadastrarProcessoSeletivo(data.nomeProcessoSeletivo, data.dataHoraInicio, data.dataHoraTermino, "",
                 data.quantidadeFacil, data.quantidadeMedio, data.quantidadeDificil)
            cy.get(mensagemCadastroSemSucesso).contains('Erro ao realizar cadastro')
        })
    })

    it('CT-WEB-026.6 - Validar Cadastrar Processo Seletivo sem sucesso (dificuldade vazio)', () => {
        cy.fixture('cadastrarProcessoSeletivo.data.json').then(data => {
            cy.acessarCadastrarProcessoSeletivo()
            cy.cadastrarProcessoSeletivoDificuldadeVazio(data.nomeProcessoSeletivo, data.dataHoraInicio, data.dataHoraTermino, data.notaDeCorte,
                 data.quantidadeFacil, data.quantidadeMedio, data.quantidadeDificil)
            cy.get(mensagemCadastroSemSucesso).contains('Erro ao realizar cadastro')
        })
    })

    it('CT-WEB-026.7 - Validar Cadastrar Processo Seletivo sem sucesso (quantidade faceis vazio)', () => {
        cy.fixture('cadastrarProcessoSeletivo.data.json').then(data => {
            cy.acessarCadastrarProcessoSeletivo()
            cy.cadastrarProcessoSeletivo(data.nomeProcessoSeletivo, data.dataHoraInicio, data.dataHoraTermino, data.notaDeCorte,
                 "", data.quantidadeMedio, data.quantidadeDificil)
            cy.get(mensagemCadastroSemSucesso).contains('Erro ao realizar cadastro')
        })
    })

    it('CT-WEB-026.8 - Validar Cadastrar Processo Seletivo sem sucesso (quantidade faceis negativo)', () => {
        cy.fixture('cadastrarProcessoSeletivo.data.json').then(data => {
            cy.acessarCadastrarProcessoSeletivo()
            cy.cadastrarProcessoSeletivo(data.nomeProcessoSeletivo, data.dataHoraInicio, data.dataHoraTermino, data.notaDeCorte,
                 data.quantidadeFacilNeg, data.quantidadeMedio, data.quantidadeDificil)
            cy.get(mensagemCadastroSemSucesso).contains('Erro ao realizar cadastro')
        })
    })

    it('CT-WEB-026.9 - Validar Cadastrar Processo Seletivo sem sucesso (quantidade medias vazio)', () => {
        cy.fixture('cadastrarProcessoSeletivo.data.json').then(data => {
            cy.acessarCadastrarProcessoSeletivo()
            cy.cadastrarProcessoSeletivo(data.nomeProcessoSeletivo, data.dataHoraInicio, data.dataHoraTermino, data.notaDeCorte,
                 data.quantidadeFacil, "", data.quantidadeDificil)
            cy.get(mensagemCadastroSemSucesso).contains('Erro ao realizar cadastro')
        })
    })

    it('CT-WEB-026.10- Validar Cadastrar Processo Seletivo sem sucesso (quantidade medias negativo)', () => {
        cy.fixture('cadastrarProcessoSeletivo.data.json').then(data => {
            cy.acessarCadastrarProcessoSeletivo()
            cy.cadastrarProcessoSeletivo(data.nomeProcessoSeletivo, data.dataHoraInicio, data.dataHoraTermino, data.notaDeCorte,
                 data.quantidadeFacil, data.quantidadeMedioNeg, data.quantidadeDificil)
            cy.get(mensagemCadastroSemSucesso).contains('Erro ao realizar cadastro')
        })
    })

    it('CT-WEB-026.11 - Validar Cadastrar Processo Seletivo sem sucesso (quantidade dificeis vazio)', () => {
        cy.fixture('cadastrarProcessoSeletivo.data.json').then(data => {
            cy.acessarCadastrarProcessoSeletivo()
            cy.cadastrarProcessoSeletivo(data.nomeProcessoSeletivo, data.dataHoraInicio, data.dataHoraTermino, data.notaDeCorte,
                 data.quantidadeFacil, data.quantidadeMedio, "")
            cy.get(mensagemCadastroSemSucesso).contains('Erro ao realizar cadastro')
        })
    })

    it('CT-WEB-026.12 - Validar Cadastrar Processo Seletivo sem sucesso (quantidade dificeis negativo)', () => {
        cy.fixture('cadastrarProcessoSeletivo.data.json').then(data => {
            cy.acessarCadastrarProcessoSeletivo()
            cy.cadastrarProcessoSeletivo(data.nomeProcessoSeletivo, data.dataHoraInicio, data.dataHoraTermino, data.notaDeCorte,
                 data.quantidadeFacil, data.quantidadeMedio, data.quantidadeDificil)
            cy.get(mensagemCadastroSemSucesso).contains('Erro ao realizar cadastro')
        })
    })

    it('CT-WEB-027.1 - Validar botão "Listar Cadastros" com sucesso', () => {
        cy.acessarListarCadastros()
        cy.get(descricaoTelaListarCadastros).contains('Listar Cadastros')
    })

    //it('CT-WEB-028.1 - Validar "Listar Cadastros" com sucesso (Pesquisar por nome)', () => {
    //})

    //it('CT-WEB-028.2 - Validar "Listar Cadastros" com sucesso (Pesquisar empresa)', () => {
    //})

    //it('CT-WEB-028.3 - Validar "Listar Cadastros" sem sucesso (Pesquisar por nome não cadastrado)', () => {
    //})

    //it('CT-WEB-028.4 - Validar "Listar Cadastros" sem sucesso (Pesquisar por empresa não cadastrada)', () => {
    //})
    */

    it('CT-WEB-029.1 - Validar botão "Provas" com sucesso', () => {
        cy.acessarProvas()
        cy.get(descricaoTelaProvas).contains('Provas')
    })

    it('CT-WEB-030.1 - Validar botão "Exportar" com sucesso', () => {
        cy.acessarExportar()
        cy.get(descricaoTelaExportar).contains('Exportar')
    })

    it('CT-WEB-031.1 - Validar botão "Perfil" com sucesso', () => {
        cy.acessarPerfil()
        cy.get(descricaoTelaPerfil).contains('Perfil')
    })

    it('CT-WEB-032.1 - Validar botão "Sair" com sucesso', () => {
        cy.acessarSair()
        cy.get(elementoLandingPage).contains('DBC Provas')
    })
});