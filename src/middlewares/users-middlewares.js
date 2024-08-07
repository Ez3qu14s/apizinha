const { getUserByID } = require('../controllers/users-controller');
const { getUserByIDModel, hasPropertyColumn } = require('../models/usersModel');

async function insertUserMiddleware(req, res, next) {
  const { nome, email, senha } = req.body;

  if (!nome || !email || !senha) {
    return res.status(400).send('Dados inválidos');
  }

  if (senha.length < 6) {
    return res.status(400).send('A senha deve ter no mínimo 6 dígitos');
  }

  if (!email.includes('@') || !email.includes('.')) {
    return res.status(400).send('Email inválido');
  }

  next();
}

async function getUserByIDMiddleware(req, res, next) {
  const { id } = req.params;

  if (!id) {
    return res.status(404).send('Dados inválidos');
  }

  next();
}

async function deleteUserByIdMiddleware(req, res, next) {
  const { id } = req.params;

  if (!id) {
    return res.status(400).send('Dados incompletos');
  }

  const user = await getUserByIDModel(id);
  if (!user) {
    return res.status(404).send('User não encontrado');
  }

  next();
}

async function updateUserByIdMiddleware(req, res, next) {
  const { id } = req.params;
  const { property } = req.body;

  if (!id) {
    return res.status(400).send('Dados incompleto');
  }
  const user = await getUserByIDModel(id);
  if (!user) {
    return res.status(404).send('User não encontrado');
  }

  const hasProperty = await hasPropertyColumn(property);

  next();
}

module.exports = {
  insertUserMiddleware,
  getUserByIDMiddleware,
  deleteUserByIdMiddleware,
  updateUserByIdMiddleware,
};
