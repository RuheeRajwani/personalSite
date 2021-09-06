const express = require('express');
const path = require('path');
const ejsMate = require("ejs-mate");
const app = express();
app.use(express.urlencoded({ extended: true }));

app.engine('ejs', ejsMate);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, "views"));
app.use(express.static(__dirname + '/public'));
let currentLink = "";

app.get('/', (req, res) => {
    currentLink = "index";
    res.render('index', { currentLink })
})
app.get('/about', (req, res) => {
    currentLink = "about";
    res.render('about', { currentLink })
})
app.get('/projects', (req, res) => {
    currentLink = "projects"
    res.render('projects', { currentLink })
})
app.get('/contact', (req, res) => {
    currentLink = "contact"
    res.render('contact', { currentLink })
})


const port = 3000;
app.listen(port, () => {
    console.log(`SERVING ON PORT ${port}`)
})