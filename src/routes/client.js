const clientRouter = require("express").Router();
const clientControllers = require("../controllers/clientControllers");

clientRouter.get("/", clientControllers.getAllClientsInvoices);
clientRouter.get("/:id", clientControllers.getClientById);

module.exports = clientRouter;
