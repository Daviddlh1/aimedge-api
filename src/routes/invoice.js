const invoiceRouter = require("express").Router();
const { Invoice } = require("../db");
const invoiceControllers = require("../controllers/invoiceControllers");

invoiceRouter.get("/", invoiceControllers.getAllInvoices);
invoiceRouter.get("/:id", invoiceControllers.getInvoiceById);
invoiceRouter.post("/", invoiceControllers.createInvoice);

module.exports = invoiceRouter;
