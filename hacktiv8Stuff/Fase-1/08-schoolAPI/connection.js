"use strict";

const { Pool } = require("pg");

const pool = new Pool({
	user: "postgres",
	host: "localhost",
	database: "school_application",
	password: "admin",
	port: 5432,
});

pool.connect();

module.exports = pool;
