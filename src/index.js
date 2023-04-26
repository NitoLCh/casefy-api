import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import { pool } from './db/db.js';

const app = express();

app.use(bodyParser.json());
app.use(cors());
app.use(helmet());
app.use(morgan('combined'));

app.get('/ping', async (req, res) => {
    const [result] = await pool.query('SELECT 1 + 1 AS result')
    res.json(result[0]);
});

app.get(`/usuarios`, async (req, res) =>{ 
    res.send('obteniendo usuarios');
    const [result] = await pool.query('SELECT * FROM usuarios WHERE id = ?',[id])
    res.json(result[0]);
});

app.post('/usuarios', async(req, res) => {
    res.send('creando usuarios');
    const [result] = await pool.query('INSERT INTO usuarios SET ?',[req.body])
    res.json(result[0]);
});

app.put('/usuarios', async (req, res) => {
    res.send('actualizando usuarios');
    const [result] = await pool.query('UPDATE usuarios SET ? WHERE id = ?',[req.body, id]);
    res.json(result[0]);
});

app.delete('/usuarios', async (req, res) => {
    res.send('eliminando usuarios');
    const [result] = await pool.query('DELETE FROM usuarios WHERE id = ?',[id]);
    res.json(result[0]);
});


app.listen(3001, () => console.log('listen in port 3001'));