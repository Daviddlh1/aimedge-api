const { Client, Invoice } = require("../db");

const getAllInvoices = async (req, res) => {
  const invoices = await Invoice.findAll({ include: Client });
  console.log(invoices);
  res.send(invoices);
};

const createInvoice = async (req, res) => {
  const { date, subTotal, discount, total, clientName } = req.body;
  const createdInvoice = await Invoice.create({
    date,
    subTotal,
    discount,
    total,
  });
  const invoicesClient = await Client.findAll({
    where: {
      name: clientName,
    },
  });
  createdInvoice.setClient(invoicesClient.map((data) => data.dataValues.id));
  res.status(200).send(createdInvoice);
};

module.exports = {
  getAllInvoices,
  createInvoice,
};
