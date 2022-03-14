const productRouter = require("express").Router();
const productControllers = require("../controllers/productControllers");

productRouter.get("/", productControllers.getAllProducts);
module.exports = productRouter;
