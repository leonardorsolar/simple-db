# O que é o Node.js e como instalá-lo?:

O Node é um interpretador da linguagem JavaScript, criado a partir de um outro chamado V8.
Caso o seu sistema operacional seja o Mac ou Windows, navegue até o endereço https://nodejs.org/en/, realize o download da versão LTS (versão mais atual e estável do Node.js) e efetue a instalação executando o arquivo baixado. Se você utiliza alguma versão do Linux, digite as seguintes linhas de comando no seu terminal:

curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash

nvm install lts/\*

Se a instalação do Node foi concluída corretamente para qualquer um dos casos citados, ao executarmos o comando abaixo receberemos como informação no nosso terminal a versão do Node instalada:

node --version

# Primeiros passos:

Vamos iniciar o nosso projeto criando um diretório onde haverá o arquivo package.json.

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

Visando uma boa organização da aplicação, criaremos uma pasta chamada src contendo um arquivo de nome server.js.

criar a pasta src > index.ts
codígo que iniciará aplicação

# index.ts:

console.log("texto")

comiplar o código de acordo com as configurações do tsconfig.json:
npx tsc
Criará a pasta compilada do código javascript
rodar no terminal:
node dist/index.js

# gitignore

# dependencies

/node_modules

.env

# testing

/coverage

# production

/dist

Feito isto, é hora de configurar o index.js, que utilizaremos como o arquivo principal do projeto.

# SERVIDOR:

Faremos as configurações básicas para “erguer” um servidor, importando e executando o Express , informando à aplicação que utilizaremos requisições e respostas no formato Json e, por fim, declarando que o servidor funcionará na porta 3000 e executará um “console.log”

instalar o express:

modulo express
npm i express
npm i --save-dev @types/express

código:
import express from "express";

// instanciar o express
const app = express();

// responde com "hello world" quando uma solicitação GET é feita para a página inicial
app.get("/", function (req, res) {
res.send("hello world");
});

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

O que é o Mysql?
O Mysql é um sistema de gerenciamento de banco de dados que utiliza a linguagem sql, pertence à empresa Oracle e pode ser executado tanto via linha de comando no terminal (caso esteja instalado) quanto em softwares auxiliares que facilitem a interação com o mesmo.

###o mysql2

npm install mysql2
módulo para conecar no mysql

criar o aquivo database.ts

isntalrt o mudlo promises:
npm install types/mysql2

## Realizar a configuração para conexão

Podemos começar a configurar a conexão com o nosso banco de dados MySQL por meio da biblioteca MySQL2. Para tal, iremos criar um arquivo específico para esta implementação chamado connection. Nele, haverá uma constante que receberá a importação de “mysql2/promise” (o uso do “promise” é necessário porque consultas a bancos de dados externos envolvem tratamentos por assincronicidade e, para utilizarmos async e await com a biblioteca, precisamos realizar a importação da forma como foi explicado).

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

Note que o objeto passado como parâmetro da função createPool possui uma série de chaves necessárias para a conexão:

Host - O endereço IP do MySQL: no nosso caso podemos utilizar o “localhost” ao invés do IP sem problemas, já que o mesmo se refere ao endereço local que estamos utilizando para executar o nosso servidor Node.js na porta 3003;
Port - A porta que você escolheu para acessar o MySQL (se você instalou o MySQL utilizando as configurações padrões, a porta será a 3306);
User - O nome do usuário que acessaremos o Mysql;
Password - A senha que utilizaremos para acessar o Mysql;
Database - O nome do banco de dados no qual iremos nos conectar.

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

cria a pasta sql e o arquivo sql.sql

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

# inserir na tabela

INSERT INTO book (title, author, description, created_at)
VALUES ('Exemplo de Título', 'Exemplo de Autor', 'Exemplo de Descrição', CURRENT_TIMESTAMP);

Depois de configurar como deve ser feita a conexão por meio da função createPool, podemos fazer nossas primeiras interações com o Mysql.

# Interagindo com o banco de dados

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

# incluindo numa rota

app.get("/book", function (req, res) {
const book = new Book();
console.log(book);
res.send(book);
});

# terminal mysql

??? rodar o create table
mysql -u root -p db-databases caminho-completo-para-o-arquivo/db.sql

# terminal mysql: gerenciamento avançado

mysql -u root -p
Visualizando as conexões ativas:
SHOW PROCESSLIST;
| 10 | root | localhost:56084 | db-databases | Sleep | 2 | | NULL
Ela retornará valores como PID (número do processo da conexão), a quantidade de conexões do seu usuário à base, a query que a conexão está rodando no momento ou se ela está ociosa (sleep).

Derrubando conexões e processos presos
KILL <numero_PID>;

máximo de conexão:
SHOW VARIABLES LIKE '%connection%';
