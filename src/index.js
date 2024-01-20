const express = require("express");

const { ServerConfig } = require("./config");
const apiRoutes = require("./routes");

const app = express();

app.use(express.json());//data get in req are in json format
app.use(express.urlencoded({ extended: true }));//pass data
app.use("/api", apiRoutes);

app.listen(ServerConfig.PORT, () => {
  console.log(`Successfully started the server on PORT : ${ServerConfig.PORT}`);
});

/**
 * In class task
 * Setup flights table using sequelize
 */
