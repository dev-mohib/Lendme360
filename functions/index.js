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
app.get('/create-report', (req, res) => {
  res.render('create-report', {name : 'some-name'})
})
app.get('/auth/:token/:url', (req, res) => {
 let user = admin.auth().verifyIdToken(req.params.token)
  .then(decodedToken => {
    console.log(decodedToken)
   return decodedToken.uid;
  }).catch(error => false);
res.redirect(`/${req.params.url}`)
})



exports.app = functions.https.onRequest(app)