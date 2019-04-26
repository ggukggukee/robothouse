const express = require('express');
const app = express();

app.use(express.static('assets'));
app.use(express.static('images'));
app.use(express.static('public'));

app.set('views', __dirname + '/views');
app.engine('html', require('ejs').renderFile);

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('index.html');
});

app.get('/ourworks', (req, res) => {
    res.render('ourworks.html');
});

app.get('/contact', (req, res) => {
    res.render('contact.html');
});

app.get('/about', (req, res) => {
    res.render('about.html');
});

app.get('/*', (req, res) => {
    res.render('404.html');
});

app.listen(process.env.PORT, process.env.IP, function(){
    console.log('Server has been started');
});