// CREATE TABLE book(
//   id INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
//   title VARCHAR(200) NOT NULL,
//   author VARCHAR(200) NOT NULL,
//   description TEXT NOT NULL,
//   created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
// );

//A função createBook retorna uma string que representa a instrução SQL
//para criar a tabela "book" no banco de dados.
const createBook = function () {
  return (
    "CREATE TABLE IF NOT EXISTS book ( \n" +
    "    id INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY, \n" +
    "    title VARCHAR(200) NOT NULL, \n" +
    "    author VARCHAR(200) NOT NULL, \n" +
    "    description TEXT NOT NULL, \n" +
    "    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP \n" +
    ");"
  );
};

// A constante createAllTables é um objeto que possui uma propriedade chamada createBook, que é atribuída ao resultado da chamada da função createBook(). Isso significa que o valor de createBook é o resultado da execução da função createBook no momento em que o objeto createAllTables é definido. Isso pode ser útil para armazenar várias funções de criação de tabelas em um único objeto e exportá-las para uso em outros módulos JavaScript.
const createAllTables = {
  createBook: createBook(),
};

export { createAllTables };
