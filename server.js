
const express = require('express');
const app = express();
const server = require('http').Server(app);
app.use(express.static("."));
app.get('/', function (req, res) {
    res.redirect('index.html');
});
server.listen(3000);