const { Client, Invoice, Product } = require("../db");

const getAllClientsInvoices = async (req, res) => {
  try {
    const clients = await Client.findAll();
    const clientsData = clients.map((client) => client.dataValues);
    res.status(200).send(clientsData);
  } catch (err) {
    console.log(err);
    res.send({ error: "error in getAllClientsInvoices" });
  }
};

const getClientById = async (req, res) => {
  const { id } = req.params;
  try {
    const client = await Client.findAll({
      where: {
        id: id,
      },
    });
    console.log(client);
    res.send(client);
  } catch (err) {
    console.log(err);
    res.send({ error: "error in getClientsById" });
  }
};

const getClientsInvoices = async (req, res) => {
  const { id } = req.params;

  try {
    const client = await Client.findAll({
      where: {
        id: id,
      },
    });

    const allInvoices = await Invoice.findAll({
      where: {
        clientId: id,
      },
      include: [Client, Product],
    });
    res
      .status(200)
      .send(await allInvoices.map((invoice) => invoice.dataValues));
  } catch (err) {
    console.log(err);
    res.send({ error: "error in getClientsById" });
  }
};

module.exports = {
  getAllClientsInvoices,
  getClientById,
  getClientsInvoices,
};
