const http = require('http');
require('dotenv').config();

const app = require('./app');
const db = require('./models');

const PORT = process.env.SERVER_PORT || 8000;

const server = http.createServer(app);

db.sequelize.sync({ alter: true }).then(() => {
  server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
});
