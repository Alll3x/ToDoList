// ================================== IMPORTS ====================================

//importando o express
const { application } = require('express');
const express = require('express');
//import do path
const path = require('path');
//import do checklist
const checklistRouter= require ('./src/routes/checklist');
//import do index
const rootRouter= require ('./src/routes/index');
//importando mongodb
require('./config/database');
//====================================       ========================================
//==================================== EXPRESS ========================================
// definindo a variavel app como variavel do express
const app = express();
app.use(express.json());
//setando caminho das paginas estaticas
app.use(express.static(path.join(__dirname, 'public')))
//setando o caminho das views
app.set('views', path.join(__dirname, 'src/views'));
app.set('view engine', 'ejs');

//================================== ROTAS ======================================

//setando rota da pg inicial (indes.ejs)
app.use('/', rootRouter);
//setando a rota do checklist
app.use('/checklists', checklistRouter);

//setando porta e mensagem de confimação do servidor 
app.listen(3000, () => {
    console.log('Conectado ao servidor');
})