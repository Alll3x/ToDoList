// ================================== IMPORTS ====================================
const express = require('express');
const checklist = require('../models/checklist');
// const checklist = require('../models/checklist');
// const checklist = require('../models/checklist');
// ================================== CONST ====================================
const router = express.Router();

const Checklist = require('../models/checklist')
// ================================== ROTAS ====================================

// ================================== GETS ====================================
//rota get 
router.get('', async (req, res) => {
    try {
        let checklist = await Checklist.find({});
        //passando a visualização 
        res.status(200).render('checklists/index', { checklist: checklist })
    } catch (error) {
        res.status(500).render('pages/error', { error: 'ERRO AO EXIBIR AS LISTAS' })
    }
})

// rota new
router.get('/new', async (req, res) => {
    try {
        let checklist = new Checklist();
        res.status(200).render('checklists/new', { checklist: checklist });
    } catch (error) {
        res.status(500).render('pages/error', { error: 'erro ao carregar formulário' })
    }
})

//rota id
router.get('/:id', async (req, res) => {
    try {
        let checklist = await Checklist.findById(req.params.id);
        res.status(200).render('checklists/show', { checklist: checklist })
    } catch (error) {
        res.status(500).render('pages/error', { error: 'ERRO AO EXIBIR AS LISTAS DE TAREFAS' })
    }
})
// ================================== POST ====================================
//rota post
router.post('/', async (req, res) => {
    let { name } = req.body.checklist;
    let checklist = new Checklist({ name });
    try {
        await checklist.save();
        res.redirect('/checklists');
    } catch (error) {
       res.status(422).render('checklists/new', {checklist: {...checklist, error}})
    }
})

// ================================== UPDATE ====================================
//rota put
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