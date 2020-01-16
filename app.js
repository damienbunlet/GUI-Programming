var express = require('express');
var favicon = require('serve-favicon');

var app = express();
app.use(express.static(__dirname + '/public'));
app.use(favicon(__dirname + '/public/img/favicon.ico'));

app.get('/', function(req, res) {
  var title = 'Home';
  res.render('index.ejs', {title: title});
});

app.get('/home', function(req, res) {
  var title = 'Home';
  res.render('index.ejs', {title: title});
});

app.get('/lissajous', function(req, res) {
  var title = 'Lissajous';
  res.render('index-lissajous.ejs', {title: title});
});

app.get('/redesign', function(req, res) {
  var title = 'Redesign';
  res.render('index-redesign.ejs', {title: title});
});

app.get('/redesign/01', function(req, res) {
  var title = 'Article';
  res.render('article-01.ejs', {title: title});
});

app.get('/game', function(req, res) {
  var title = 'Tic Tac Toe';
  res.render('index-game.ejs', {title: title});
});

console.log("The server is ready !");

app.listen(8080);
