const express = require('express');
const app = express();
const path = require('path');

const port = process.env.PORT || 6060;
const host = process.env.HOST || 'localhost';

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const morgan = require('morgan');
app.use(morgan('dev'));

const router = require('./router')();

app.use('/api', router);

app.use(express.static(path.join(__dirname, '..', 'build/')));

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '..', 'build', 'index.html'));
});

app.listen(port, () => {
  console.log(`running on port http://localhost:${port}`);
});
