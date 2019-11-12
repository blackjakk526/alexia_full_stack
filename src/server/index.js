const express = require("express");
const os = require("os");
const mysql = require("mysql");
// const bodyParser = require('body-parser');

const con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "p",
  database: "alexa"
});
let results;
const app = express();

con.connect(err => {
  if (err) throw err;
  con.query("SELECT * FROM response", (error, result) => {
    if (error) throw error;
    results = result;
  });
});
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());
app.use(express.static("dist"));
app.get("/api/getUsername", (req, res) =>
  res.send({ username: os.userInfo().username })
);
app.get("/api/add", (req, res) => res.send({ results }));

// app.post('/api/update', (req, res) => {});
app.listen(process.env.PORT || 8080, () =>
  console.log(`Listening on port ${process.env.PORT || 8080}!`)
);
