import { pool } from '../db/db.js';

export const getProyectos = async (req, res) => {
    try {
        const [result] = await pool.query('SELECT * FROM proyecto');
        res.json(result);
    } catch (error) {
        return res.status(500).json({message: "Algo salio mal"});
    }
};

export const getProyecto = async (req, res) => {
    try {
        const [result] = await pool.query('SELECT * FROM proyecto WHERE IdProyecto = ?', [req.params.id]);
        if(result.length <= 0){
            return res.status(404).json({message: "El proyecto no existe"});
        }
        res.json(result[0]);
    } catch (error) {
        return res.status(500).json({message: "Algo salio mal"});
    }
};

export const crearProyecto = async (req, res) => {
    try{
        const {nombre} = req.body;
        const [result] = await pool.query('INSERT INTO proyecto (NombreProyecto) VALUES (?)',
        [nombre]);
        res.json({
            id: result.insertId,
            nombre,
        });
    }catch(error){
        return res.status(500).json({message: "Algo salio mal"});
    }
};

export const actualizarProyecto = async (req, res) => {
    try {
        const {id} = req.params;
        const {nombre} = req.body;
        const [result] = await pool.query('UPDATE proyecto SET Nombre = IFNULL(?, NombreProyecto) WHERE IdProyecto = ?',
        [nombre, id]);

        if(result.affectedRows <= 0){
            return res.status(404).json({message: "El proyecto no existe"});
        }

        const [proyectoActualizado] = await pool.query('SELECT * FROM proyecto WHERE IdProyecto = ?', [id]);

        res.json(proyectoActualizado[0]);
    } catch (error) {
        return res.status(500).json({message: "Algo salio mal"});
    }
};

export const eliminarProyecto = async (req, res) => {
    try {
        const [result] = await pool.query('DELETE FROM proyecto WHERE IdProyecto = ?', [req.params.id]);

        if(result.affectedRows <= 0){
            return res.status(404).json({message: "El proyecto no existe"});
        }

        res.json({message: "El proyecto ha sido eliminado"});
    } catch (error) {
        return res.status(500).json({message: "Algo salio mal"});
    }
};