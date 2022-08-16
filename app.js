//importando o express
const { application } = require('express');
const express = require('express');
const checklistRouter= require ('./src/routes/checklist');
// definindo a variavel app como variavel do express
const app = express();
//usando middleware 
app.use(express.json());

// const log = (req, res, next) =>{
//     console.log(req.body);
//     console.log(`Data: ${Date.now()}`);
//     next();
// }

// app.use(log)
// // enviando uma requisição para escrever algo na tela
// app.get('/', (req,res) =>{
//     res.send('<h1>Coisas a fazer</h1>')
// })
// //adicionando uma resposta json 
// app.get('/json', (req, res) =>{
//     console.log(req.body);
//     res.json({title: 'Tarefa X', done: true});
// })

// setando a porta 3000 como porta do servidor e definindo uma mensagem de confimação bacaninha 

app.use('/checklists',checklistRouter);

app.listen(3000, () => {
    console.log('Ta tudo bacaninha');
})