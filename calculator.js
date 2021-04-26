const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({extended: true}));

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
});

app.post("/", (req, res) => {
    console.log(req.body);
    let result = Number(req.body.num1) + Number(req.body.num2);
    res.send(result+"thanks!");
});

app.listen(3000, () => {
    console.log("servers is running");
});