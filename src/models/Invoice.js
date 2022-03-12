const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "Invoice",
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
      },
    },
    {
      timeStamps: false,
    }
  );
};
