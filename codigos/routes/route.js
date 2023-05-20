// [21:21, 19/05/2023] Leonardo Solar: https://expressjs.com/pt-br/guide/routing.html
// [22:46, 19/05/2023] Leonardo Solar: var express = require('express');
// var app = express();

// // respond with "hello world" when a GET request is made to the homepage
// app.get('/', function(req, res) {
//   res.send('hello world');
// });
// [22:47, 19/05/2023] Leonardo Solar: express.Router
// Use a classe express.Router para criar manipuladores de rota modulares e montáveis
// [22:48, 19/05/2023] Leonardo Solar: // 1. adicionar essas rotas a aplicação principal
// app.use('/admin', adminRouter)
// [22:49, 19/05/2023] Leonardo Solar: // 1. chamar uma instância do router
// var adminRouter = express.Router()
// [22:49, 19/05/2023] Leonardo Solar: // 2. criar rotas para ele
// // página principal (http://localhost:8000/admin)
// adminRouter.get('/', (req, res) => {
//   res.send('Eu sou o dashboard!')
// })
// [22:51, 19/05/2023] Leonardo Solar: // middleware de roteamento exeutado a cada requisição
// adminRouter.use((req, res, next) => {
//   // logar cada requisição no console
//   console.log(req.method, req.url)
//   // continue com o que precisar ser feito e vá para a rota
//   next()
// })
// [22:53, 19/05/2023] Leonardo Solar: const path = require('path')
// const port = 3000

// // então, criamos uma rota para '/'
// app.get('/', (req, res) => {
//   //res.send('Hello World!')
//   // aqui precisamos enviar o index.html para o cliente
//   res.sendFile(path.join(__dirname + '/index.html'))
// })
