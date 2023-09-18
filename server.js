const express = require('express')
require('dotenv').config()

const app = express()

app.get('/', express.static(__dirname + '/public'));

app.use('/component', function(req, res, next) {
    setTimeout(next, 2000);
}, express.static(__dirname + '/build'));

app.use('/plugins', express.static(__dirname + '/utils'));

app.listen(process.env.PORT, () => console.log(`Server At http://localhost:${process.env.PORT}`));
