//Criando nossas routes no arquivo produtos.js
import express from "express";

//feature de roteamento do Express, o Express Router (manipuladores de rota modulares e montáveis)
const productsRouter = express.Router();

import path from "path";

productsRouter.get("/", (req, res) => {
  return res.json({ message: "Router module produto - productRouter" });
});

// Método de roteamento / Manipuladores de rota
productsRouter.get("/", (req, res, next) => {
  //Enviando arquivo HTML como resposta à requisição
  //res.sendFile(path.join(__dirname, "../", "views", "produtos", "produtos.html"));
  res.sendFile(path.join(__dirname, "../", "views", "produtos.html"));
});

// Método de roteamento / chamando a controller
//productsRouter.get("/list", (req, res) => getAllProductsController.handle(req, res));

//productRouter.post("/", is(["admin", "user"]), (req, res) => createProductController.handle(req, res));

export { productsRouter };
