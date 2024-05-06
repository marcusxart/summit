const { createUser, signIn } = require('../handlers/account');

const users = require('express').Router();

users.post('/sign-up', createUser);
users.post('/sign-in', signIn);

module.exports = users;
