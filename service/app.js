const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const port = 8080;
const createUser = require("./createUser");
const login = require("./login")

// create application/json parser
//const jsonParser = bodyParser.json()

// create application/x-www-form-urlencoded parser
const urlencodedParser = bodyParser.urlencoded({ extended: true })
app.use(cors());
app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.post('/signup', urlencodedParser, (req, res) => {
    console.log("Request body", req.body)
    createUser(req.body,res);
});

app.post('/login', urlencodedParser, (req, res) => {
    console.log("Request body", req.body)
    login(req.body,res);
});

// app.post('/signup', jsonParser, (req, res) => {
//     console.log("Request body", req.body)
//     createUser(req.body);
// });

app.listen(port, () => {
    console.log(`Server listening on port ${port}`)
})