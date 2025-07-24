const ParentingChat = require('../models/parenting-chat');

exports.getChats = (req, res, next) => {
  ParentingChat.find()
    .populate('sender')
    .then(chats => res.status(200).json(chats))
    .catch(error => res.status(500).json({ message: 'Error fetching chats', error }));
};

exports.createChat = (req, res, next) => {
    const chat = new ParentingChat({
        id: req.body.id,
        subject: req.body.subject,
        msgText: req.body.msgText,
        sender: req.body.sender
    });

    chat.save()
    .then(createdChat => res.status(201).json(createdChat))
    .catch(error => res.status(500).json({ message: 'Error creating chat', error }));
    };

exports.updateChat = (req, res, next) => {
    ParentingChat.findOneAndUpdate({ id: req.params.id }, req.body, { new: true })
        .then(updatedChat => res.status(200).json(updatedChat))
        .catch(error => res.status(500).json({ message: 'Error updating chat', error }));
    };

exports.deleteChat = (req, res, next) => {
    ParentingChat.findOneAndDelete({ id: req.params.id })
        .then(result => res.status(200).json({ message: 'Chat deleted' }))
        .catch(error => res.status(500).json({ message: 'Error deleting chat', error }));
    };
