const res = require("express/lib/response");
const { Product } = require("../db");
const getAllProducts = async (req, res) => {
  try {
    const foundProducts = await Product.findAll();
    const products = foundProducts.map((product) => product.dataValues);
    res.status(200).send(products);
  } catch (err) {
    console.log(err);
    res.send({ error: "error in getAllInvoices" });
  }
};
module.exports = {
  getAllProducts,
};
