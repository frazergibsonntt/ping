import bodyParser from 'body-parser';
import express from 'express';

const app = express();

app.use(bodyParser.json());

app.post('/ping', (req, res) => {
  res.send('ping');
});

export default app;
