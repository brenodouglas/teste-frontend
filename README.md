# Teste frontend
> Projeto p/ trabalhar com issues do github

## Recomendação
* Após clonar o projeto é necessário gerar um token para utilizar a aplicação e adiciona-lo no arquivo 'src/api/github.js' no campo password no lugar do `_`

* Para gerar o token pode seguir os caminhos no github: Settings > Configurações > Developer Settings > Personal access tokens > Generate new token

* Não é necess marcar nenhuma das opções e somente gerar o token, altere também o link do repositório em 'baseURL' ainda no mesmo arquivo github.js

## Como iniciar o projeto
> Clone ou baixe o projeto e dentro da pasta raíz do projeto use os seguintes comandos:

``` bash
# instalar dependencias
npm install
#ou recomendação usar o yarn
yarn

# servidor com hot reload em localhost:8080
npm run dev

# build para produção com minificação
npm run build

# build para produção e ver o relatório do bundle analyzer
npm run build --report

# rodar teste unitários
npm run unit

# run todos os testes
npm test
```
