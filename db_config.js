var mysql = require("mysql");

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "nodeDB",
});

// to create db
con.connect(function (err) {
  if (err) throw err;
  console.log("Connected!");
  // con.query("CREATE DATABASE nodeDB", function (err, result) {
  //   if (err) throw err;
  //   console.log("Database created");
  // });
});

module.exports = con;
