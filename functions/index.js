const functions = require('firebase-functions');
const express = require('express')
const engines = require('consolidate')


const app = express()
app.engine('hbs', engines.handlebars)
app.set('views', './views')
app.set('view engine', 'hbs')


app.get('/', (req, res) => {
  res.render('index', {name : 'some-name'})
})
app.get('/login', (req, res) => {
  res.render('login', {name : 'some-name'})
})
app.get('/profile', (req, res) => {
  res.render('profile', {name : 'some-name'})
})
app.get('/reports', (req, res) => {
  res.render('profile', {name : 'some-name'})
})
app.get('/purchase-report', (req, res) => {
  res.render('profile', {name : 'some-name'})
})
app.get('/nav', (req, res) => {
  res.render('nav', {name : 'some-name'})
})




exports.app = functions.https.onRequest(app)