import {createPool} from 'mysql2/promise';
import {DB_HOST, DB_USER, DB_PASS, DB_DATABASE, DB_PORT} from '../config.js';

export const pool = createPool({
    host: "containers-us-west-80.railway.app",
    user: "root",
    password: "WA1O5W6Z9DVD2SsL2Qpd",
    port: 6251,
    database: "railway",
});
