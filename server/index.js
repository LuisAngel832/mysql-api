import cors from 'cors';
import express from 'express';
import routes from '../routes/index.js'; // Asegúrate de agregar ".js" al final

const server = express();
server.use(cors());
server.options('*', cors());

server.use(express.json());

server.use('/api', routes); // La ruta debe comenzar con "/"

export default server; // Usamos "export default" en lugar de "module.exports"