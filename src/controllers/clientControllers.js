const { Client } = require("../db");

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

module.exports = {
  getAllClientsInvoices,
};
