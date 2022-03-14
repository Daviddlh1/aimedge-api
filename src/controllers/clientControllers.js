const res = require("express/lib/response");
const { where } = require("sequelize/types");
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

const getClientById = async (clientId) => {
  try {
    const client = await Client.findAll({
      where: {
        id: clientId,
      },
    });
    console.log(client);
  } catch (err) {
    console.log(err);
    res.send({ error: "error in getClientsById" });
  }
};

module.exports = {
  getAllClientsInvoices,
  getClientById,
};
