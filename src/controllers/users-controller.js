const decryptPassword = require('../helpers/decryptPassword');
const encryptPassword = require('../helpers/encryptPassword');
const userModel = require('../models/usersModel');

async function createUser(req, res) {
  const { nome, email, senha } = req.body;

  const pass = await encryptPassword(senha);

  const decrypted = await decryptPassword(pass);

  console.log(decrypted);

  try {
    await userModel.insertUserModel(nome, email, pass);
    return res.status(201).send('Usuário inserido com sucesso');
  } catch (error) {
    return res.status(400).send('Usuário já cadastrado');
  }
}

async function getUserByID(req, res) {
  const { id } = req.params;

  try {
    const user = await userModel.getUserByIDModel(id);
    return res.status(200).send(user);
  } catch (error) {
    return res.status(400).send(error.message);
  }
}

async function deleteUserById(req, res) {
  const { id } = req.params;

  try {
    await userModel.deleteUserByIDModel(id);
    return res.status(200).send('Deletado com sucesso');
  } catch (error) {
    return res.status(400).send(error.message);
  }
}

async function updateUserById(req, res) {
  const { id } = req.params;
  const { property, newValue } = req.body;

  try {
    const user = await userModel.updateUserModel(id, property, newValue);
    return res.status(200).send(user);
  } catch (error) {
    return res.status(400).send(error.message);
  }
}

module.exports = {
  createUser,
  getUserByID,
  deleteUserById,
  updateUserById,
};
