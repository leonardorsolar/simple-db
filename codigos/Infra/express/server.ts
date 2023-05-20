import express from "express";
// instanciar o express
const app = express();
const path = require("path");

// responde com "hello world" quando uma solicitação GET é feita para a página inicial
app.get("/", function (req, res) {
  res.send("hello world");
});

// então, criamos uma rota para '/'
app.get("/", (req, res) => {
  //res.send('Hello World!')
  // aqui precisamos enviar o index.html para o cliente
  res.sendFile(path.join(__dirname + "/index.html"));
});

//a função é responsável por iniciar o servidor Express e fazê-lo escutar na porta 3000
app.listen(3000, () => console.log("Server on port 3000"));
