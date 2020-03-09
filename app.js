const express = require("express")
const app = express()
const port = 3000
const request = require("request")

app.set("view engine", "ejs")

app.get('/', function(req, res){
    res.render("search")
})

app.get('/request', function(req, res){
    var query = req.query.search
    const url = 'http://www.omdbapi.com/?s=' + query + '&apikey=8e313ce7'
    request(url, function(error, response, body){
        if(!error && response.statusCode == 200){
            var data = JSON.parse(body)
            res.render("results", {data : data})
        }
    })
})

app.listen(port, function(){
    console.log("conncected!")    
})