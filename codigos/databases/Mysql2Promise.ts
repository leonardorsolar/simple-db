import { createConnection, Connection } from "mysql2/promise";

// Função para criar a conexão com o MySQL
export async function createDBConnection(): Promise<Connection> {
  const connection = await createConnection({
    host: "localhost",
    user: "seu_usuario",
    password: "sua_senha",
    database: "seu_banco_de_dados",
  });

  console.log("Conexão com o MySQL estabelecida com sucesso.");

  return connection;
}

// //Agora você pode importar e usar a função createDBConnection em seu código para obter uma conexão com o MySQL. Aqui está um exemplo de uso em um arquivo app.ts:

// import { createDBConnection } from './db';

// async function main() {
// try {
// // Cria a conexão com o MySQL
// const connection = await createDBConnection();

//     // Execute suas consultas e operações no banco de dados aqui...
//     // Por exemplo:
//     const [rows, fields] = await connection.execute('SELECT * FROM tabela');

//     console.log('Resultado da consulta:', rows);

//     // Feche a conexão quando terminar
//     connection.end();

// } catch (error) {
// console.error('Erro ao conectar ao MySQL:', error);
// }
// }

// // Chame a função principal
// main();
