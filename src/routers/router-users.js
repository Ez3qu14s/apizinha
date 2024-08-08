const express = require('express');
const router = express.Router();

const usersController = require('../controllers/users-controller');
const {
  insertUserMiddleware,
  getUserByIDMiddleware,
  deleteUserByIdMiddleware,
  updateUserByIdMiddleware,
} = require('../middlewares/users-middlewares');

router.post('/users', insertUserMiddleware, usersController.createUser);
router.get('/users/:id', getUserByIDMiddleware, usersController.getUserByID);
router.delete(
  '/users/delete/:id',
  deleteUserByIdMiddleware,
  usersController.deleteUserById,
);
router.put(
  '/users/edit/:id',
  updateUserByIdMiddleware,
  usersController.updateUserById,
);

module.exports = router;
