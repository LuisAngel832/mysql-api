import { Router } from 'express';
import { createUser, getAllUsers } from '../controllers/index.js'; // Asegúrate de usar el nombre correcto del archivo

const router = Router();

// Ruta de bienvenida
router.get('/', (req, res) => res.send('Welcome'));

// Ruta para crear un usuario
router.post('/users', createUser);

// Ruta para obtener todos los usuarios
router.get('/users', getAllUsers);

export default router;