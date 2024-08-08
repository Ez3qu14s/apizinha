const jwt = require('jsonwebtoken');

const dotenv = require('dotenv');
dotenv.config();

const jwtSecret = process.env.JWT_SECRET_KEY;

async function login(req, res) {
  const { id, email } = req.user;
  const token = jwt.sign({ id, email }, jwtSecret, { expiresIn: '1h' });

  res.send(token);
}

module.exports = { login };
