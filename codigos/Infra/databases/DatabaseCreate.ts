import { createPool, Pool, PoolConnection } from "mysql2/promise";
import { createAllTables } from "./createAllTables";

//a classe  Database define uma conexão com o banco de dados e fornece o método query para executar consultas SQL.
export class Database {
  //private connection: Pool;
  connection: any;
  databaseName: string = "db-databases";

  constructor() {
    //A classe cria uma conexão com o banco de dados MySQL usando createPool do módulo mysql2/promise
    this.connection = createPool({
      host: "localhost",
      user: "root",
      password: "root",
      database: this.databaseName,
      connectionLimit: 10,
    });
    console.log(`Conexão estabelecida com o banco de dados ${this.databaseName}`);
  }

  //const [query] = await connection.execute("SELECT * FROM book");
  //const [query] = await connection.query("SELECT * FROM book", []);

  //O método query permite executar consultas SQL na conexão e o método close fecha a conexão com o banco de dados.
  query(statement: string, params: any): Promise<any> {
    return this.connection.query(statement, params);
  }

  //o método close é responsável por encerrar a conexão com o banco de dados
  async close(): Promise<void> {
    await this.connection.end();
    console.log(`*** Conexão encerrada com o banco de dados ${this.databaseName}***`);
  }

  // para funcionar, inseri na index:runCreateAllTables
  // responde com "hello world" quando uma solicitação GET é feita para a página inicial
  // app.get("/db", async function (req, res) {
  //   const db = new Database();
  //   const response = await db.runCreateAllTables();
  //   res.send(response);
  // });

  async runCreateAllTables(): Promise<any> {
    try {
      // Verificar se a tabela já existe
      const [result] = await this.query("SELECT COUNT(*) as count FROM information_schema.tables WHERE table_schema = ? AND table_name = 'book'", [this.databaseName]);
      //console.log(result);
      // Verificar tabelas do banco
      const tableExistsNumber = result[0].count > 0;
      console.log(tableExistsNumber);
      console.log(`Confere tabelas do banco:${tableExistsNumber}`);

      if (!tableExistsNumber) {
        // Listar tabelas do banco
        const [tabelas_BD] = await this.query("SELECT table_name FROM information_schema.tables WHERE table_schema = ?", [this.databaseName]);
        console.log(tabelas_BD);
        const tableExists = tabelas_BD.map((row: any) => row.TABLE_NAME);
        console.log("Tabelas existentes:", tableExists);
        // Iniciar a transação
        await this.query("BEGIN", "");

        // Executar a criação das tabelas
        await this.query(createAllTables.createBook, []);

        if (!tabelas_BD.createBook) {
          console.log("criado a tabela createBook");
          await this.query(createAllTables.createBook, []);
        }
        // Confirmar a transação
        await this.query("COMMIT", "");
        console.log("Tabelas criadas com sucesso!");
        return "Tabelas criadas com sucesso!";
      }
      console.log("Tabelas já criadas!");
      return "Tabelas já criadas!";
    } catch (error) {
      console.error("Erro ao criar as tabelas:", error);
    }
  }
}

// async query(stmt: string, params: any[]): Promise<RowDataPacket[]> {
//   const connection = await this.pool.getConnection();
//   try {
//     const [rows] = await connection.query(stmt, params);
//     return rows as RowDataPacket[];
//   } finally {
//     connection.release();
//   }
// }

// query(stmt: string, params: any): Promise<any> {
//   return new Promise((resolve, reject) => {
//     this.connection.query(stmt, params, (error: any, results: any) => {
//       if (error) {
//         reject(error);
//       } else {
//         resolve(results);
//       }
//     });
//   })
//   .finally(() => {
//     this.close();
//   });
// }

// async runCreateAllTables(): Promise<void> {
//   try {
//     // Verificar se a tabela já existe
//     const [result] = await this.query(
//       "SELECT COUNT(*) as count FROM information_schema.tables WHERE table_schema = ? AND table_name = 'book'",
//       [this.databaseName]
//     );

//     const tableExists = result[0].count > 0;

//     if (!tableExists) {
//       // Iniciar a transação
//       await this.query("BEGIN");

//       // Executar a criação das tabelas
//       await this.query(createAllTables.createBook, []);

//       // Confirmar a transação
//       await this.query("COMMIT");

//       console.log("Tabelas criadas com sucesso!");
//     } else {
//       console.log("As tabelas já existem. Nenhuma ação foi realizada.");
//     }
//   } catch (error) {
//     // Reverter a transação em caso de erro
//     await this.query("ROLLBACK");

//     console.error("Erro ao criar as tabelas:", error);
//   }
// }
