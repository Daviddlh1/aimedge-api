const clientRouter = require("express").Router();
const clientControllers = require("../controllers/clientControllers");

clientRouter.get("/", clientControllers.getAllClientsInvoices);
clientRouter.get("/:id", clientControllers.getClientById);
clientRouter.get("/clientDetails/:id", clientControllers.getClientsInvoices);

module.exports = clientRouter;
