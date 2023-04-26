import { Router } from "express";
import { getUsuarios, getUsuario, crearUsuario, actualizarUsuario, eliminarUsuario  } from 
    '../controllers/usuarios.controller.js'; 

const router = Router();

router.get(`/usuarios`, getUsuarios);
router.get(`/usuarios/:id`, getUsuario);

router.post('/usuarios', crearUsuario); 

router.patch('/usuarios/:id', actualizarUsuario);

router.delete('/usuarios/:id', eliminarUsuario);


export default router;