const express = require('express');
const useRouter = require('./car-dealer/car-dealer-router');
const server = express();

server.use(express.json());
server.use('/api/car-dealer', useRouter);

const PORT = 5000

server.listen(PORT, () => {
    console.log(`\n *** API running on port ${PORT}***\n`)
})