# INICIAR:

npm init -y
cria rá o package.json

# módulo typescript:

npm i typescript -D
dependência de desenvolvimento

configurar o typescript:
npx typescript --init
ou
npx tsc --init

configurar tsconfig.json:

"target": "ES6",  
"outDir": "./dist",

# diretorio src:

criar a pasta src > index.ts
codígo que iniciará aplicação

# index.ts:

console.log("texto")

comiplar o código de acordo com as configurações do tsconfig.json:
npx tsc
Criará a pasta compilada do código javascript
rodar no terminal:
node dist/index.js

# SERVIDOR:

instalar o express:

modulo express
npm i express
npm i --save-dev @types/express

código:
import express from "express";

// instanciar o express
const app = express();

app.listen(3000, () => console.log("Server on port 3000"));

rodar:
npx tsc && node dist/index.js
http://localhost:3000/

# CONFIGURAÇÕES DE DESENVOLVEDOR

### package.json

"scripts": {
"test": "echo \"Error: no test specified\" && exit 1",
"build": "tsc",
"dev": "npx tsc && node dist/index.js"
},

para rodar:
npm run build

### instalar o nodemon

npm install nodemon -D
Instalar a dependência como desenvolvedor para reiniciar o servidor sempre que houver alteração no código fonte.

### script do package.json

configura o nodemon para arquivo typescript
npm i ts-node -D

### instalar

"scripts": {
"test": "echo \"Error: no test specified\" && exit 1",
"build": "tsc",
"dev": "nodemon src/index.ts --exec ts-node"
},

para rodar:
npm run dev

# BANCO DE DADOS

# Como conectar o Node.js com o MySQL

## Instalar o MySQL

###o mysql2

npm install mysql2
módulo para conecar no mysql

criar o aquivo database.ts

isntalrt o mudlo promises:
npm install types/mysql2

## Realizar a configuração para conexão

No arquivo database.ts:

// Criar a conexão com banco de dados MySQL
const connection = mysql.createConnection({
host: "localhost",
user: "root",
password: "root",
database: "database",
});

// Verificar a conexão do Node.js com banco de dados
connection.connect(function (err) {
console.log("Conexão com o banco de dados realizado com sucesso!");
});

# Criação do banco de dados DBeaver:

crie uma conexao mysql
server host: localhost
port 3306
database: database
nome de uusário: root
senha: root

aparecerá database:

Certifique-se de substituir 'seu_usuario', 'sua_senha' e 'seu_banco_de_dados' pelas informações corretas do seu banco de dados MySQL.

# Criação da tabela:

cria a apsta sql e o arquivo sql.sql

CREATE DATABASE db-databases;

CREATE TABLE book(
id INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
title VARCHAR(200) NOT NULL,
author VARCHAR(200) NOT NULL,
description TEXT NOT NULL,
created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

DESCRIBE book;

no DBeaver , crie a tabela e rode o código:

CREATE TABLE book(
id INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
title VARCHAR(200) NOT NULL,
author VARCHAR(200) NOT NULL,
description TEXT NOT NULL,
created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

acessar o mysql no terminal:

mysql -u root -p
senha: root

> show databases;

# classe Book

import { connect } from "./database";
//import { minhaDatabase } from 'modulo-externo'

export default class Book {
database: any;
constructor() {
// this.database = minhaDatabase.inicia();
this.database = connect();
}

getBook() {
const listBook = this.database.query("select \* from book");
console.log(listBook);
}

// save() {
// this.database.save(this);
// }
}

# index.ts

instanciando a classe Book

const book = new Book();
console.log(book);

# verarquivo db.ts

Em seguida, você pode criar um arquivo db.ts com o seguinte código:

import { createConnection, Connection } from 'mysql2/promise';

// Função para criar a conexão com o MySQL
export async function createDBConnection(): Promise<Connection> {
const connection = await createConnection({
host: 'localhost',
user: 'seu_usuario',
password: 'sua_senha',
database: 'seu_banco_de_dados',
});

console.log('Conexão com o MySQL estabelecida com sucesso.');

return connection;
}

Agora você pode importar e usar a função createDBConnection em seu código para obter uma conexão com o MySQL. Aqui está um exemplo de uso em um arquivo app.ts:

import { createDBConnection } from './db';

async function main() {
try {
// Cria a conexão com o MySQL
const connection = await createDBConnection();

    // Execute suas consultas e operações no banco de dados aqui...
    // Por exemplo:
    const [rows, fields] = await connection.execute('SELECT * FROM tabela');

    console.log('Resultado da consulta:', rows);

    // Feche a conexão quando terminar
    connection.end();

} catch (error) {
console.error('Erro ao conectar ao MySQL:', error);
}
}

// Chame a função principal
main();

Certifique-se de substituir 'seu_usuario', 'sua_senha' e 'seu_banco_de_dados' pelas informações corretas do seu banco de dados MySQL.

Espero que isso ajude a estabelecer uma conexão com o MySQL usando o pacote mysql2 no TypeScript!
