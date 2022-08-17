const express = require('express');
const checklist = require('../models/checklist');

const router = express.Router();

const Checklist = require('../models/checklist')

router.get('', async (req, res)=>{
    try {
        let checklist = await Checklist.find({});
        res.status(200).json(checklist)
    } catch (error) {
        res.status(500).json(error)
    }
})

// nova rota post
router.post('/', async (req , res) =>{
    let {name} = req.body;
    console.log(name);
    //         OU
    // console.log(req.body["name"]);
    try{
        let checklist = await Checklist.create({name})
        res.status(200).json(checklist);
    } catch (error){
        res.status(422).json(error)
    }
})

//parametro na rota
router.get('/:id',async (req, res)=>{
    try {
        let checklist = await Checklist.findById(req.params.id);
        res.status(200).json(checklist)
    } catch (error) {
        res.status(422).json(error)
    }
})

router.put('/:id', (req, res)=>{
    console.log(req.params.id);
    res.send(`PUT ID: ${req.params.id}`)
})

router.delete('/:id', (req, res)=>{
    console.log(req.params.id);
    res.send(`DELETE ID: ${req.params.id}`)
})

module.exports = router; 