const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const { json, urlencoded } = require('body-parser');

const app = express();
let port = process.env.PORT;

app.use(cors());
app.use(json());
app.use(urlencoded({ extended: true }));
app.use(morgan('dev'));
app.use(express.static('dist'));

app.get('/', (req, res) => {
  res.status(200);
});

if (port == null || port == '') {
  port = 8000;
}

module.exports = {
  start: () => {
    app.listen(port, () => {
      console.log(`App listening at http://localhost:${port}`);
    });
  },
};
