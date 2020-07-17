const express = require("express");
const mongoose = require("mongoose");
const url = "mongodb://localhost/AlienDBex";

const app = express();

mongoose.connect(url, { userNewUrlParser: true });
const con = mongoose.connection;

con.on("open", () => {
    console.log("Ndi connected ...");
});

app.use(express.json());

const alienRouter = require("./routes/aliens");
app.use("/aliens", alienRouter);
app.listen(1000, () => {
    console.log("Server started");
});