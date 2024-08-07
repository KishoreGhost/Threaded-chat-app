const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();
const PORT = process.env.PORT || 6969;

// const connectToDB = require("./database"); TODO: Uncomment after getting MongoURI

app.use(express.Router());
app.use(cors());

// connectToDB P.S: Uncomment after getting MongoURI

app.get("/", (req, res) => {
    res.json("hello world");
})

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});
