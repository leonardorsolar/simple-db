import express from "express";
import Book from "./Book";

// instanciar o express
const app = express();

const book = new Book();
console.log(book);

app.listen(3000, () => console.log("Server on port 3000"));
