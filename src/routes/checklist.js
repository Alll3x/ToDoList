const express = require('express');

const router = express.Router();

router.get('', (req, res) =>{
    console.log('Olá');
    res.end();
})

module.exports = router;