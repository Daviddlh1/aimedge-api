const clientRouter = require("express").Router();
const clientControllers = require("../controllers/clientControllers");

clientRouter.get("/", clientControllers.getAllClientsInvoices);

module.exports = clientRouter;
