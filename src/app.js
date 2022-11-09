import express from "express";
import { connect } from "./db.js";
import { PORT } from "./config.js";

const app = express();

app.get("/", async (req, res) => {
  const [rows] = await connect.query("SELECT * FROM users");
  res.json(rows);
});

app.get("/ping", async (req, res) => {
  const [RESULT] = await connect.query(`SELECT "hello world" as RESULT`);
  res.json(RESULT[0]);
});

app.get("/create", async (req, res) => {
  const [ResultSetHeader] = await connect.query(
    'INSERT INTO users(name) VALUES ("uberman")'
  );
  const { insertId, info } = ResultSetHeader;
  console.log("id " + insertId + " : " + "info " + info);
  res.json(ResultSetHeader);
});

app.listen(PORT, () => {
  console.log(
    `New app listening on the port ${PORT} \n================================================`
  );
});