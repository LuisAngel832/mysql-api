import 'dotenv/config';
import server from './server/index.js';

const PORT = process.env.PORT || 3300;
server.listen(PORT, () => console.log(`Server is live at http://localhost:${PORT}`));