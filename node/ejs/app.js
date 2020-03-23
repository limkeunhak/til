global.__basedir = __dirname;

const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const path = require('path');

const app = express();

app.set('view engine', 'ejs');
app.set('views', [
    path.join(__basedir, '/views/shared'),
    path.join(__basedir, '/views/')
]);

app.set('layout', 'layout');
app.use(expressLayouts);

app.get('/', (req, res) => {
	res.render('main.ejs', { title: 'main?', test: 'pass params' });
});
app.get('/second', (req, res) => {
	res.render('second.ejs', { title: 'second' });
});
app.get('/third', (req, res) => {
	res.render('third.ejs', { title: 'third' });
});

app.listen(3000, () => {
	console.log('test-ejs server is running on port 3000');
});
