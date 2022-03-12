const router = require("express").Router();
const clientRouter = require("./client");
const productRouter = require("./product");
const invoiceRouter = require("./invoice");

router.use("/client", clientRouter);
router.use("/product", productRouter);
router.use("/invoice", invoiceRouter);

module.exports = router;
