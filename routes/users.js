const router = require('express').Router();
const User = require('../models/users.js');
const { findAllUsers, findUser, createUser } = require('../controllers/users.js');

router.get('/', findAllUsers);
router.get('/:id', findUser);
router.post('/', createUser);

module.exports = router;
