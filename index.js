const server = require("./src/app");
const { conn } = require("./src/db");
const fillDataBase = require("./src/controllers/data");

conn.sync({ force: true }).then(() => {
  server.listen(3001, async () => {
    await fillDataBase();
    console.log("listening on port 3001");
  });
});
