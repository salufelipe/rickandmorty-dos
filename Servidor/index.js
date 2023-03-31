// require("dotenv").config();
const express = require('express');
const router = require("./Routes/index")
const morgan = require("morgan");

const server = express();
const PORT = 3001;
// const PORT = process.env.PORT || 3001;

server.use(express.json());

server.use(morgan("dev"));

server.use("/", router);


server.listen(PORT, () => {
   console.log('Server raised in port: ' + PORT);
});