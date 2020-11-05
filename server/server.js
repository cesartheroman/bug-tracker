import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import { json, urlencoded } from 'body-parser';

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

export const start = () => {
  app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
  });
};
