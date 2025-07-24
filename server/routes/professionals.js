const express = require('express');
const router = express.Router();
const Professional = require('../models/professional');

// GET all professionals
router.get('/', async (req, res) => {
    const professionals = await Professional.find();
    res.json(professionals);
});

// POST new professional
router.post('/', async (req, res) => {
    const newProfessional = new Professional(req.body);
    await newProfessional.save();
    res.status(201).json(newProfessional);
    });

// PUT update
router.put('/:id', async (req, res) => {
    await Professional.updateOne({ id: req.params.id }, req.body);
    res.status(204).send();
});

// DELETE
router.delete('/:id', async (req, res) => {
    await Professional.deleteOne({ id: req.params.id });
    res.status(204).send();
});

module.exports = router;
