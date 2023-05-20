// 1-Criando o servidor
const express = require("express");

const app = express();

// 2-Importando a rota
import { productsRouter } from "../routes/app.route";
// const usuariosRoutes = require('./routes/usuarios')

app.use(productsRouter);
// app.use(usuariosRoutes)

app.listen(3000, () => {
  console.log("Servidor de exemplo aberto na porta: 3000");
});
