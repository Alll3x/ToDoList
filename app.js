//importando o express
const { application } = require('express');
const express = require('express')
// definindo a variavel app como variavel do express
const app = express();
// enviando uma requisição para escrever algo na tela
app.get('/', (req,res) =>{
    res.send('<h1>Coisas a fazer</h1>')
})
//adicionando uma resposta json (NÃO ESTÁ FUNCIONANDO)
application.get('/json', (req, res) =>{
    res.json({title: 'Tarefa X', done: true});
})

// setando a porta 3000 como porta do servidor e definindo uma mensagem de confimação bacaninha 
app.listen(3000, () => {
    console.log('Ta tudo bacaninha');
})