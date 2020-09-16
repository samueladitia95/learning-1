"use strict";

const pool = require("../connection.js");

const sqlStatement = `CREATE TABLE IF NOT EXISTS students (
                        id SERIAL PRIMARY KEY,
                        first_name VARCHAR(64) NOT NULL,
                        last_name VARCHAR(64) NOT NULL,
                        email VARCHAR(64) NOT NULL,
                        gender VARCHAR(8) NOT NULL,
                        birth_date DATE NOT NULL
                    );
                    CREATE TABLE IF NOT EXISTS teachers (
                        id SERIAL PRIMARY KEY,
                        first_name VARCHAR(64) NOT NULL,
                        last_name VARCHAR(64) NOT NULL,
                        email VARCHAR(64) NOT NULL,
                        gender VARCHAR(8) NOT NULL
                    );
                    CREATE TABLE IF NOT EXISTS subjects (
                        id SERIAL PRIMARY KEY,
                        subject_name VARCHAR(64) NOT NULL
                    );`;

pool.query(sqlStatement, (err) => {
	if (err) {
		throw err;
	} else {
		console.log("Tables Created");
	}
});
