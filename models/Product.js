// const mongoose = require('mongoose');
// const Schema = mongoose.Schema;

// let ProductSchema = new Schema({
//     name: {type: String, required: true, max: 100},
//     price: {type: Number, required: true},
// });


// // Export the model
// module.exports = mongoose.model('Product', ProductSchema);

var con = require('../db_config');

// to create db using mysql
// con.connect(function(err) {
//   if (err) throw err;
//   console.log("Connected!");
//   let sql = 'CREATE Table products (id INT AUTO_INCREMENT PRIMARY KEY, pname VARCHAR(255), price INT(10))';
//   con.query(sql, function (err, result) {
//     if (err) throw err;
//     console.log("Table created");
//   });
// });
module.exports = {
  con
}