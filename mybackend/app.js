const express = require('express')
const app = express()
const port = 5000
const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

const ajaxRequest = (url, req, res, method) => {
  var xhr = new XMLHttpRequest();
  xhr.open(method, url);
  xhr.setRequestHeader("Content-Type", "application/json"); 
  xhr.setRequestHeader("Authorization", `oauth_signature_method="PLAINTEXT", oauth_consumer_key="${req.query.apitoken}" , oauth_token="${req.query.accesstoken}",  oauth_signature="${req.query.apisecret}&${req.query.accesssecret}"`); 

  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
      res.send(xhr.responseText)
  }};
  xhr.send();
}
//login api
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
    var url = `https://scrive.com/api/v2/documents/new`;
    ajaxRequest(url, req, res, "POST")
})

//list of documents api
app.get('/list', function (req, res) {
   var url = `https://scrive.com/api/v2/documents/list`;
   ajaxRequest(url, req, res, "GET")
})
//get single document api
app.get('/document', function (req, res) {
   var url = `https://scrive.com/api/v2/documents/${req.query.documentId}/get`;
   ajaxRequest(url, req, res, "GET")
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})