// let's go!

require('dotenv').config({ path: 'variables.env'});
const createServer = require('./createServer');
const db = require('./db');  

const server = new createServer();

server.start({
    cors: {
        credentials: true,
        origin: process.env.FRONTEND_URL,
    },
}, deets => {
    console.log(`Server is not running on port http://localhost:${deets.port}`);
});