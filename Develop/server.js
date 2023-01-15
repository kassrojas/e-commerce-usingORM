const express = require('express');
const routes = require('./routes');
// import sequelize connection YES 
const sequelize = require('./config/connection');
const { Sequelize } = require('./config/connection');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);

// sync sequelize models to the database, then turn on the server YES
sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`App listening at http://localhost:${PORT}!`);
  });
});
