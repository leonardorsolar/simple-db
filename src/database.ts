import { createPool } from "mysql2/promise";

export async function connect() {
  // Criar a conexão com banco de dados MySQL
  const connection = await createPool({
    host: "localhost",
    user: "root",
    password: "root",
    database: "db-databases",
    connectionLimit: 10,
  });

  // // Verificar a conexão do Node.js com banco de dados
  // connection.connect(function (err) {
  //   console.log("Conexão com o banco de dados realizado com sucesso!");
  // });
  return connection;
}
