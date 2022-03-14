const { Client, Invoice, Product, PurchaseOrder } = require("../db");

async function findAllInvoices() {
  const foundInvoices = await Invoice.findAll({ include: [Client, Product] });
  return foundInvoices;
}

const getAllInvoices = async (req, res) => {
  try {
    const invoices = await findAllInvoices();
    res.status(200).send(invoices);
  } catch (err) {
    console.log(err);
    res.send({ error: "error in getAllInvoices" });
  }
};

const getInvoiceById = async (req, res) => {
  const { id } = req.params;
  try {
    const invoices = (await findAllInvoices()).map((invoice) =>
      invoice.toJSON()
    );
    const invoice = invoices.filter((invoice) => invoice.id == id);
    res.send(invoice);
  } catch (err) {
    console.log(err);
    res.send({ error: "error in getInvoiceById" });
  }
};

const createInvoice = async (req, res) => {
  try {
    const {
      invoiceDate,
      subTotal,
      discount,
      total,
      clientName,
      invoiceProducts,
    } = req.body;
    const createdInvoice = await Invoice.create({
      date: invoiceDate,
      subTotal,
      discount,
      total,
      productQuantity: JSON.stringify(invoiceProducts),
    });

    const invoicesClient = await Client.findAll({
      where: {
        name: clientName,
      },
    });

    const invoicesProducts = invoiceProducts.map(async (product) => {
      console.log(product);
      const products = await Product.findAll({
        where: { name: product.productName },
      });
      return products;
    });

    invoicesProducts.forEach((promise) =>
      promise.then((data) => createdInvoice.addProduct(data))
    );

    createdInvoice.setClient(
      invoicesClient[0].dataValues.id /* .map((data) => data.dataValues.id) */
    );
    const a = await Invoice.findAll();
    res.status(200).send(createdInvoice);
  } catch (err) {
    console.log(err);
    res.send({ error: "error in createInvoice" });
  }
};

module.exports = {
  getAllInvoices,
  createInvoice,
  getInvoiceById,
};
