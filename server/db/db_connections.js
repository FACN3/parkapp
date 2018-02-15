const db_connection = () => {
  require('env2')('.env');
  const dbConfig = process.env.mongodb_url;
  const mongoose = require('mongoose');

  mongoose.Promise = global.Promise;

  mongoose.connect(dbConfig);

  mongoose.connection.on('error', () => {
    console.log('Could not connect to the database. Exiting now');
    process.exit();
  });

  mongoose.connection.once('open', () => {
    console.log('Successfully connected to the database');
  });
};
module.exports = db_connection;
