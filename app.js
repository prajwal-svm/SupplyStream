require('dotenv').config();
const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require("body-parser");
const partials = require('express-partials');
const homeRoutes = require('./routes/homeRoutes');

const PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
app.set('views', path.join(__dirname, 'views'));
app.use(partials());
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'dist')));

app.use('/', homeRoutes);

app.listen(PORT, () => {
    console.log(`SupplyStream running at port ${PORT}\n`);
});
