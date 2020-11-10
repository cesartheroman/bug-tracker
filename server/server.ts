import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import { json, urlencoded } from 'body-parser';

const app = express();
const port: string = process.env.PORT || '8000';

app.use(cors());
app.use(json());
app.use(urlencoded({ extended: true }));
app.use(morgan('dev'));
app.use(express.static('dist'));

app.get('/', (req: express.Request, res: express.Response) => {
  res.status(200);
});

export default function start(): void {
  app.listen(port, () => {
    // eslint-disable-next-line no-console
    console.log(`App listening at http://localhost:${port}`);
  });
}
