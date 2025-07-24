const express = require('express');
const router = express.Router();
const ParentingChat = require('../models/parenting-chat');

// GET all chats
router.get('/', async (req, res) => {
    const chats = await ParentingChat.find();
    res.json(chats);
});

// POST new chat message
router.post('/', async (req, res) => {
    const newChat = new ParentingChat(req.body);
    await newChat.save();
    res.status(201).json(newChat);
});

// PUT update a message
router.put('/:id', async (req, res) => {
    await ParentingChat.updateOne({ id: req.params.id }, req.body);
    res.status(204).send();
});

// DELETE a message
router.delete('/:id', async (req, res) => {
    await ParentingChat.deleteOne({ id: req.params.id });
    res.status(204).send();
});

module.exports = router;


