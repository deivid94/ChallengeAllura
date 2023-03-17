<div align="center">


<img src="https://www.alura.com.br/assets/img/alura-share.1647533642.png" width="360px" height="220px">

</div>
<div align="justify"> 
<h1>Allura Challenger 6</h1>

 <p> Criando uma API com Node.js, Express e MongoDB para uma livraria
Este repositório contém o código-fonte para a solução do Allura Challenger, que tem como objetivo construir uma API utilizando as tecnologias Node.js, Express e MongoDB para uma livraria.<p>

<h2 align="center">Tools:</h2>

<p align="center">
 <img alt="" src="https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white">
 <img alt="" src="https://img.shields.io/badge/Express.js-404D59?style=for-the-badge">
 <img alt="" src="https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white">
 <img alt="" src="https://img.shields.io/badge/Insomnia-5849be?style=for-the-badge&logo=Insomnia&logoColor=white">
 <img alt="" src="https://img.shields.io/badge/json-5E5C5C?style=for-the-badge&logo=json&logoColor=white">
  </p>



## Instalação

### Para instalar as dependências do projeto, execute o seguinte comando:
```@bin/bash
git clone https://github.com/deivid94/ChallengeAllura.git
 ```
## Navegue ate o diretorio do projeto no terminal:
```@bin/bash
    cd ChallengeAlura
 ```

 ## inicie o projeto
```@bin/bash
    npm init -y
 ```
## autoreload server
```@bin/bash
npm install nodemon

```
## Configure o package.json

- adicione as seguintes linhas :
```@bin/bash
{
    "type":"module"
    "scripts": {
    "dev": "nodemon server.js",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
}

```

## Rode a api

```@bin/bash
 npm run dev

```


## Endpoints

A API possui os seguintes endpoints:

<p style="color:yellow">GET /livros</p>
- Retorna todos os livros cadastrados, com o ID e título de cada livro.

Exemplo de resposta:
.
```json
[  
    {"_id":1,    "title": "O Senhor dos Anéis",  },
    {"_id":2,    "title": "Harry Potter e a Pedra Filosofal",}
  ]
```
<p style="color:yellow">GET /livros/:id </p>

-Retorna um livro específico pelo ID, com o ID e título do livro.
Exemplo de resposta:

```json

{
  "_id":1,
  "title": "O Senhor dos Anéis",
}
```
<p style="color:yellow">POST /livros </p>
Cadastra um novo livro na livraria, com o título do livro.
Exemplo de requisição:

```json

{
  "title": "Dom Casmurro"
}

```
Exemplo de resposta:

```json
{
  "_id":3,
  "title": "Dom Casmurro",
}
```
<p style="color:yellow">PUT /books/:id</p>
Atualiza o título de um livro específico pelo ID.
Exemplo de requisição:


```json

{
  "title": "O Hobbit"
}

```

Exemplo de resposta:

```json

{
  "_id":1,
  "title": "O Hobbit",
}
```

<p style="color:yelloe">DELETE /books/:id</p>
Remove um livro específico pelo ID.
Exemplo de resposta:

```json
{
  "message": "Livro removido com sucesso"
}
```
<div>