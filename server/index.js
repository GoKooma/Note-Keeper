const express = require('express');
const parser = require('body-parser');
const cors = require('cors');
const port = 3000;
const router = require('./routes.js');

const app = express();

app.use(parser.json());
app.use(parser.urlencoded({ extended: true }));

app.use(cors());

app.use(morgan('dev'));

app.use(express.static(path.resolve(__dirname, '../client/dist')));

app.use('/api', router);

app.listen(port, () => console.log('Listening to port', port));