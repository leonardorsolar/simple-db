var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "mongodb-vs-mysql",
});

connection.connect();

// conexão com o banco
connection.connect(function (err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
});
// console.log('-------- Iniciando Script ------------');

// consulta a tabela
async function mysql_consult() {
  await con.query("SELECT * FROM clientes", function (err, result, fields) {
    if (err) throw err;
  });

  connection.end();
  //await con.query("SELECT * FROM clientes INNER JOIN empresas e ON empresas_cod_empresa = e._id", function (err, result, fields) {if (err) throw err;});
}
