//import { createPool } from "mysql2/promise";
//const mysql = require("mysql2/promise");
import { createPool, Pool } from "mysql2/promise";

export async function connect(): Promise<Pool> {
  // Criar a conexão com banco de dados MySQL
  //const connection = createPool({
  const connection = createPool({
    host: "localhost",
    user: "root",
    password: "root",
    database: "db-databases",
    connectionLimit: 10,
  });

  console.log("Conexão com o banco de dados realizado com sucesso!");
  //console.log(connection);
  //const [query] = await connection.execute("SELECT * FROM book");
  //console.log(query);

  return connection;
}
