const express = require('express');
const path = require('path');
const ejsMate = require("ejs-mate");
const app = express();
app.use(express.urlencoded({ extended: true }));
require('dotenv').config();
const yelpCampLink = process.env.YELP_CAMP_LINK || 'http://localhost:3000/'
const safeReturnLink = process.env.SAFE_RETURN_LINK || 'http://localhost:3001/'

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
    res.render('projects', { currentLink, yelpCampLink, safeReturnLink })
})
app.get('/contact', (req, res) => {
    currentLink = "contact"
    res.render('contact', { currentLink })
})


const port = 80;
app.listen(port, () => {
    console.log(`SERVING ON PORT ${port}`)
})