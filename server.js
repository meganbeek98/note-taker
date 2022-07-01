const express = require("express");
const app = express();

const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes= require('./routes/htmlRoutes');

app.use(express.static('public'));
app.use(express.urlencoded({extended: true}));
app.use(express.json());