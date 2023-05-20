import express from "express";
import { connect } from "./databasefunction";
import { Database } from "./Database";
import Book from "./Book";

// instanciar o express
const app = express();

//é usada para adicionar um middleware ao aplicativo Express.
app.use(express.json());

// responde com "hello world" quando uma solicitação GET é feita para a página inicial
app.get("/", function (req, res) {
  res.send("hello world");
});

// responde com "hello world" quando uma solicitação GET é feita para a página inicial
//executa uma consulta direta usando a conexão estabelecida
// a rota /book-f responde a uma solicitação GET com a função de retorno assíncrona.
app.get("/book-f", async function (req, res) {
  const connection = await connect();
  console.log("Conexão estabelecida com sucesso!");
  // Exemplo: Executar uma consulta
  const [rows] = await connection.query("SELECT * FROM book");
  console.log(rows);
  // Importante: Não esqueça de fechar a conexão quando não for mais necessária
  await connection.end();
  res.send(rows);
});

//a rota /book-injectiondependency responde a uma solicitação GET com a função de retorno assíncrona.
//utiliza a classe Book para encapsular a lógica relacionada aos livros e obter a lista de livros a partir da conexão.
app.get("/book-injectiondependency", async function (req, res) {
  const connection = await connect();
  const book = new Book(connection);
  // console.log(book);
  const listBooks = await book.getAllBooks();
  console.log(listBooks);
  //res.send(rows);
});

//a rota /book responde a uma solicitação GET com a função de retorno assíncrona.
app.get("/book", async function (req, res) {
  const database = new Database();
  //console.log(database);
  try {
    const book = new Book(database);
    //console.log(book);
    const listBooks = await book.getAllBooks();
    console.log(listBooks);
    res.send(listBooks);
    //res.json(listBooks);
  } catch (error) {
    console.error("Erro ao executar a consulta:", error);
    res.status(500).send("Erro interno do servidor");
  } finally {
    await database.close();
  }
});
// a rota /book cria uma instância da classe Database e uma instância da classe Book, realiza uma consulta para obter a lista de livros, envia a lista como resposta e fecha a conexão com o banco de dados. Caso ocorra algum erro durante a execução, uma resposta de erro é enviada.

//a função é responsável por iniciar o servidor Express e fazê-lo escutar na porta 3000
app.listen(3000, () => console.log("Server on port 3000"));
