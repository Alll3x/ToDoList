// ================================== IMPORTS ====================================
const express = require('express');
const checklist = require('../models/checklist');
// ================================== CONST ====================================
const router = express.Router();

const Checklist = require('../models/checklist')
// ================================== ROTAS ====================================

// ================================== GETS ====================================
// nova rota get 
router.get('', async (req, res) => {
    try {
        let checklist = await Checklist.find({});
        //passando a visualização 
        res.status(200).render('checklists/index', {checklist: checklist})
    } catch (error) {
        res.status(500).render('pages/error', {error: 'ERRO AO EXIBIR AS LISTAS'})
    }
})

//parametro na rota
router.get('/:id', async (req, res) => {
    try {
        let checklist = await Checklist.findById(req.params.id);
        res.status(200).render('checklists/show', {checklist: checklist})
    } catch (error) {
        res.status(200).render('pages/error', {error: 'ERRO AO EXIBIR AS LISTAS DE TAREFAS'})
    }
})
// ================================== POST ====================================
// nova rota post
router.post('/', async (req, res) => {
    let { name } = req.body;
    console.log(name);
    //         OU
    // console.log(req.body["name"]);
    try {
        let checklist = await Checklist.create({ name })
        res.status(200).json(checklist);
    } catch (error) {
        res.status(422).json(error)
    }
})

// ================================== UPDATE ====================================
//nova rota put
router.put('/:id', async (req, res) => {
    let { name } = req.body
    try {
        let checklist = await Checklist.findByIdAndUpdate(req.params.id, { name }, { new: true });
        res.status(200).json(checklist);
    } catch (error) {
        res.status(422).json(error)
    }
})
// ================================== DELETE ====================================
//nova rota delete
router.delete('/:id', async (req, res) => {
    try {
        let checklist = await Checklist.findByIdAndDelete(req.params.id);
        res.status(200).json(checklist);
    } catch (error) {
        res.status(422).json(error)
    }
})
// ================================== EXPORTS ====================================
module.exports = router; 