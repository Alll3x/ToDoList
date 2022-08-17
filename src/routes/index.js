//import do express
const express = require('express');
//import do router
const router = express.Router();

//definição da rota
router.get('/', async (req, res) =>{
    res.render('pages/index')
});

//exportação do módulo da rota
module.exports = router;