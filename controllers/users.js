const User = require('../models/users.js');

module.exports.findAllUsers = (req, res) => {
  User.find({})
    .then((user) => res.send({ data: user }))
    .catch((user) => res.status(500).send({ message: 'Произошла ошибка' }));
};

module.exports.findUser = (req, res) => {
  User.findById(req.params.id)
    .then((user) => {
      if (!user) {
        res.status(404).json({ message: 'Такого пользователя не существует' });
      }
      res.status(200).send({ data: user });
    })

    .catch((err) => res.status(500).send({ message: 'Произошла ошибка при поиске пользователя' }));
};

module.exports.createUser = (req, res) => {
  const { name, about, avatar } = req.body;

  User.create({ name, about, avatar })
    .then((user) => res.status(200).send({ data: user }))
    .catch((err) => res.status(500).send({ message: 'Произошла ошибка при создании пользователя' }));
};
