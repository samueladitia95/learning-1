"use strict";

const express = require("express");
const app = express();
const port = 3000;
const homeRoutes = require("./routes/index.js");


app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.use(express.static("public"))

app.use("/", homeRoutes);

app.listen(port, () => {
	console.log(`Listening to port ${port}`);
});
