const express = require('express');
const router = express.Router();
const ParentingDoc = require('../models/parenting-doc');

// GET all
router.get('/', async (req, res) => {
    const docs = await ParentingDoc.find();
    res.json(docs);
});

// POST new
router.post('/', async (req, res) => {
    const newDoc = new ParentingDoc(req.body);
    await newDoc.save();
    res.status(201).json(newDoc);
});

// PUT update
router.put('/:id', async (req, res) => {
    await ParentingDoc.updateOne({ id: req.params.id }, req.body);
    res.status(204).send();
});

// DELETE
router.delete('/:id', async (req, res) => {
    await ParentingDoc.deleteOne({ id: req.params.id });
    res.status(204).send();
});

module.exports = router;
