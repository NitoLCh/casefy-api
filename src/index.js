import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import { pool } from './db/db.js';

const app = express();

app.use(bodyParser.json());
app.use(morgan('combined'));

app.get('/ping', async (req, res) => {
    const [result] = await pool.query('SELECT 1 + 1 AS result')
    res.json(result[0]);
});

app.get('/usuarios', (req, res) => res.send('obteniendo usuarios'));

app.post('/usuarios', (req, res) => res.send('creando usuarios'));

app.put('/usuarios', (req, res) => res.send('actualizando usuarios'));

app.delete('/usuarios', (req, res) => res.send('eliminando usuarios'));

app.listen(3001, () => console.log('listen in port 3001'));