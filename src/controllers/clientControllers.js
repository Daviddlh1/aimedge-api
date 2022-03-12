const { Client } = require("../db");

const getAllInvoices = async (req, res) => {
  try {
    const clients = await Client.findAll();
    const clientsData = clients.map((client) => client.dataValues);
    res.status(200).send(clientsData);
  } catch (err) {
    res.send({ error: err });
  }
};

module.exports = {
  getAllInvoices,
};
