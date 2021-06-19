import express from 'express';
import bodyParser from 'body-parser';
import router from './routes';

const app = express();

app.use(bodyParser.json());

app.get('/', (req, res) => res.send('INDEX'));

app.use('/api', router);

app.use((err: Error, req: express.Request, res: express.Response, next: express.NextFunction) => {
  res.status(500).json({ message: err.message });
})

app.listen(3000);