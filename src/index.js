import app from './app.js';
import {PORT, DB_HOST, DB_PORT} from './config.js';

app.listen(PORT);
console.log('listen on port ', PORT);
console.log('listen on DB_PORT ', DB_PORT);
console.log('listen on HOST ', DB_HOST);