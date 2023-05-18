import { Router } from "express";
import { getProyectos, getProyecto, crearProyecto, actualizarProyecto, eliminarProyecto  } from '../controllers/proyectos.controllers.js';

const router = Router();

router.get(`/proyectos`, getProyectos);
router.get(`/proyectos/:id`, getProyecto);

router.post('/proyectos', crearProyecto);

router.patch('/proyectos/:id', actualizarProyecto);

router.delete('/proyectos/:id', eliminarProyecto);

export default router;