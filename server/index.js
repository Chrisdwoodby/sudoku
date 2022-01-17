const express = require('express');
const app = express();
const port = process.env.PORT || 7500;


app.use(express.json());
app.use(express.static(__dirname + "/../dist"));


app.listen(port, () => console.log(`application is running on port ${port}...`))
