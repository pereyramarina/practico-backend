require('dotenv').config();
const express = require('express');
const sequelize = require('./config/database');
const userRoutes = require('./routes/userRoutes');

const app = express();

app.use(express.json());

app.use('/api/users', userRoutes);

sequelize.sync()
  .then(() => app.listen(3000, () => console.log('Server running on port 3000')))
  .catch(err => console.error('Failed to sync database:', err));
