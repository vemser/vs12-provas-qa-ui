# Projeto - Provas DBC

# Testes com Cypress para UI

(adicionar descrição do projeto)

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

## Features cobertas

 - Cadastro do Usuário; //exemplo
 - Login do Usuário; //exemplo
 - Adicionar Endereço ao Usuário; //exemplo
 - Checkout; //exemplo
 - Lista de desejos; //exemplo
 - Newsletter; //exemplo


## Referências

 - [Cypress Documentation](https://docs.cypress.io/)
 - [Getting Started - Faker](https://fakerjs.dev/guide/)
 - [Allure NPM Package](https://www.npmjs.com/package/@shelex/cypress-allure-plugin)
 - [dotEnv Package](https://www.npmjs.com/package/dotenv)