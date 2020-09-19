"use strict";

const express = require("express");
const app = express();
const port = 3000;
const index = require("./routes/index");

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

app.use("/", index);

app.listen(port, () => {
	console.log(`Listening in port ${port}`);
});
