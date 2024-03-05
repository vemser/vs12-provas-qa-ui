# Projeto - Provas DBC

# Testes com Cypress para UI

O projeto de testes UI - Provas DBC consiste na implementação de testes de interface de usuário utilizando a ferramenta Cypress. O objetivo principal é garantir a qualidade e a integridade do software por meio da automação de testes em diferentes aspectos do sistema.

## Rodando o projeto localmente

1 - Clone o repositório no local desejado;
```bash
  git clone https://github.com/vemser/vs12-provas-qa-ui.git
```

2 - Acesse a pasta do projeto;
```bash
  cd vs12-provas-qa-ui
```
    
3 - Instale as depedências;
```bash
  npm i
```

4 - Copie e renomeie o .env.example para .env
Se estiver no Windows:
```bash
  copy .env.example .env
```
Se estiver no Mac/Linux:
```bash
  cp .env.example .env
```

5 - Defina as váriaveis de ambiente no arquivo .env

6 - Rode os testes com:
```bash
  npm run test:allure
```

## Algumas dicas
  
  - Certifique-se de que suas dependências foram instaladas corretamente!
  - Sempre verifique se o seu arquivo .env está sendo ignorado e não pode ser commitado.
  - Se estiver enfrentando problemas com o arquivo .env sendo enviado para o repositório Git, você pode tentar limpar o cache e remover o arquivo conforme abaixo:
  ```bash
    git rm --cached .env
  ```
  - Se ocorrerem problemas na execução do comando allure devido a problemas relacionados ao PATH, tente executar o seguinte comando:
  ```bash
    npm i -g allure-commandline
  ```
  - Certifique-se de que o seu arquivo .env está configurado corretamente, caso contrário, os testes irão falhar.
  - Verifique o JENKINSFILE caso queira replicar a pipeline utilizada pelo time da VS13.

  - **NÃO DE COMMIT EM DADOS SENSÍVEIS!**

## Features cobertas de forma manual e ou automatizada

 - Login dos usuários;
 - Validação do direcionamento das rotas no front-end;
 - Validação das ações no dashboard dos usuários;
 - Cadastro de questões;
 - Cadastro de processos seletivos;
 - Cadastro de empresas;
 - Edição de perfil;
 - Cadastro de colaboradores.


## Referências

 - [Cypress Documentation](https://docs.cypress.io/)
 - [Getting Started - Faker](https://fakerjs.dev/guide/)
 - [Allure NPM Package](https://www.npmjs.com/package/@shelex/cypress-allure-plugin)
 - [dotEnv Package](https://www.npmjs.com/package/dotenv)