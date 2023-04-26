import { pool } from '../db/db.js';

export const getUsuarios = async (req, res) => {
    try {
        const [result] = await pool.query('SELECT * FROM user');
        res.json(result);
    } catch (error) {
        return res.status(500).json({message: "Algo salio mal"});
    }
}

export const getUsuario = async (req, res) => { 
    try {
        const [result] = await pool.query('SELECT * FROM user WHERE IdUser = ?',[req.params.id]);
        if(result.length <= 0){
            return res.status(404).json({message: "El usuario no existe"});
        }   
        res.json(result[0]);    
    } catch (error) {
        return res.status(500).json({message: "Algo salio mal"});
    }
}

export const crearUsuario = async (req, res) => {
    try {
        const {usuario, correo, contrasena, rol} = req.body;
        const [result] = await pool.query('INSERT INTO user (Usuario, Correo, Contraseña, Rol) VALUES (?, ?, ?, ?)',
        [usuario, correo, contrasena, rol]);
        res.json({
            id: result.insertId,
            usuario,
            correo,
            contrasena,
            rol
            });
    } catch (error) {
        return res.status(500).json({message: "Algo salio mal"});
    }
}

export const actualizarUsuario = async (req, res) => {
    try {
        const {id} = req.params;
        const {usuario, correo, contrasena, rol} = req.body;
        const [result] = await pool.query('UPDATE user SET Usuario = IFNULL(?, Usuario), Correo = IFNULL(?, Correo), Contraseña = IFNULL(?, Contraseña), Rol = IFNULL(?, Rol) WHERE IdUser = ?',
        [usuario, correo, contrasena, rol, id]);
    
        if(result.affectedRows <= 0){ 
            return res.status(404).json({message: "El usuario no existe"});
        }
    
        const [usuarioActualizado] = await pool.query('SELECT * FROM user WHERE IdUser = ?', [id]);
    
        res.json(usuarioActualizado[0]);
    } catch (error) {
        return res.status(500).json({message: "Algo salio mal"});
    }
}

export const eliminarUsuario = async (req, res) => {
    try {
        const [result] = await pool.query('DELETE FROM user WHERE IdUser = ?', [req.params.id]);

        if(result.affectedRows <= 0){
            return res.status(404).json({message: "El usuario no existe"});
        }
    
        res.sendStatus(204);    
    } catch (error) {
        return res.status(500).json({message: "Algo salio mal"});
    }
    
}