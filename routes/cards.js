const router = require('express').Router();
const User = require('../models/cards.js');
const { findAllCards, deleteCard, createCard } = require('../controllers/cards.js');

router.get('/', findAllCards);
router.post('/', createCard);
router.delete('/:id', deleteCard);

module.exports = router;
