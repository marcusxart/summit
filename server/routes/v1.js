const { Router: router } = require('express');
const users = require('./account.v1');
const quests = require('./quest.v1');

const v1 = router();

v1.get('/', (req, res) => {
  res.send('Server running');
});
// Define your routes here

v1.use('/account', users);
v1.use('/quests', quests);

module.exports = v1;
