import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import rutasUsuarios from './routes/usuarios.routes.js'
import rutasInicio from './routes/index.routes.js'

const app = express();

app.use(express.json());
app.use(bodyParser.json());
app.use(cors());
app.use(helmet());
app.use(morgan('combined'));

//Rutas
app.use('/api', rutasInicio);
app.use('/api', rutasUsuarios);

app.use((req, res, next) => {
    res.status(404).json({message: "Pagina no encontrada"});
});

export default app;