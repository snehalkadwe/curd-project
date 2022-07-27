// import models to perform curd operation
var {con} = require("../models/Product");

const test = (req, res) => {
    res.send("success: Greeting from test controller");
}

const index = (req, res) => {
    let query = "Select * from products";
    con.query(query, (err, result) => {
        if (err) throw err;
        let products = result;
        res.render("products/index", {products});
    });
    
}
const create = (req, res) => {
    res.render("products/add");
}

const save = (req, res) => {
    let data = {pname: req.body.name, price: req.body.price};
    let query = "INSERT INTO products SET ?";
    con.query(query, data, (err, result) => {
        if (err) throw err;
        console.log("one record inserted");
    })
    res.redirect('/products')
}

const edit = (req, res) => {
    console.log(req.params.id);
    
    let query = `SELECT * from products WHERE id=${req.params.id}`;
    con.query(query, (err, result) => { 
        let product = result;
        res.render("products/edit", {product});
    });
}

const update = (req, res) => {
    console.log(req.body, req.params.id)
    let query = "UPDATE products SET pname='"+req.body.name+"', price='"+req.body.price+"' WHERE id="+req.params.id;
    con.query(query, (err, result) => {
        console.log("data updated", result);
        let sql = "Select * from products";
        con.query(sql, (err, result) => {
            if (err) throw err;
            let products = result;
            res.render("products/index", {products});
        });
    });
}
module.exports = {
    test,
    index,
    create,
    save,
    edit,
    update,
}