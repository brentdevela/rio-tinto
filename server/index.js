'use strict';
const port = 8010;
const server = require('./server')();
server.listen(port, () => console.log(`App started and listening on port ${port}`));