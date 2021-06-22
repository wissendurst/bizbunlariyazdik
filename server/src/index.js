const initExpress = require("./initExpress");
const initPassport = require("./initPassport");
const initRoutes = require("./initRoutes");

const server = initExpress();
initPassport(server);
initRoutes(server);
