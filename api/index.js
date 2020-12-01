const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const server = express();

const searchRouter = require("./src/routes/search.js")

server.use(morgan("dev"));
server.use(express.urlencoded({extended: false}))
server.use(express.json());
server.use(cors());

server.use("/search", searchRouter)


server.listen(3001, () => {
    console.log(`Server on port 3001`)
})