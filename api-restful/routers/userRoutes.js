const express = require('express');
const { register, login } = require('../controllers/userController');
const { body } = require('express-validator');

const router = express.Router();

router.post(
  '/register',
  [
    body('username').notEmpty(),
    body('password').isLength({ min: 6 }),
    body('email').isEmail(),
  ],
  register
);

router.post('/login', login);

module.exports = router;