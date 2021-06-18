const express = require('express')
const app = express()
const port = 5000
const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

//authenticaton api
app.post('/auth', function (req, res) {
    var url = `https://scrive.com/api/v2/getpersonaltoken?email=${req.query.email}&password=${req.query.password}`;
    var xhr = new XMLHttpRequest();
    xhr.open("POST", url);

    xhr.setRequestHeader("Content-Type", "application/json");
    

    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4) {
        res.send(xhr.responseText)
    }};
    xhr.send();
 })
 //create new doc api
 app.post('/new', function (req, res) {
   console.log('res', req.query)
    var url = `https://scrive.com/api/v2/documents/new`;
    var xhr = new XMLHttpRequest();
    xhr.open("POST", url);
    xhr.setRequestHeader("Content-Type", "application/json"); 
    xhr.setRequestHeader("Authorization", `oauth_signature_method="PLAINTEXT", oauth_consumer_key="${req.query.apitoken}" , oauth_token="${req.query.accesstoken}",  oauth_signature="${req.query.apisecret}&${req.query.accesssecret}"`); 

    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4) {
        res.send(xhr.responseText)
    }};
    xhr.send();
})
//list of documents api
app.get('/list', function (req, res) {
  console.log('res', req.query)
   var url = `https://scrive.com/api/v2/documents/list`;
   var xhr = new XMLHttpRequest();
   xhr.open("GET", url);
   xhr.setRequestHeader("Content-Type", "application/json"); 
   xhr.setRequestHeader("Authorization", `oauth_signature_method="PLAINTEXT", oauth_consumer_key="${req.query.apitoken}" , oauth_token="${req.query.accesstoken}",  oauth_signature="${req.query.apisecret}&${req.query.accesssecret}"`); 

   xhr.onreadystatechange = function () {
     if (xhr.readyState === 4) {
       res.send(xhr.responseText)
   }};
   xhr.send();
})
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})