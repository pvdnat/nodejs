const express = require('express')
const app = express()

const mountRoute = require("./mount/mount_ex")
const mountApp = express();

console.log("We are in server.js")
//2
app.get("/getInfo", function (req, res) {
    res.json({
        "Name":"Van Phan",
        "Status":501,
        "Session":"Merstack"
    })
})

//5
app.get('/getVaccine', function (req, res) {
    let vaccine = req.query["vaccine"]
    let price = req.query["price"]
    let doses = req.query["doses"]

    res.json({
        "vaccineName":vaccine,
        "price":price,
        "doses":doses
    })
})

//7
app.use('/vaccination',mountApp)
mountApp.use('/',mountRoute)
mountApp.get('/vaccine',(req, res)=>{
    res.send(`<h1>Flu Vaccine</h1>`)
})

//8
app.get('/vaccine/:getVaccineByID/flu', function (req, res) {
    let vaccine_id = req.params["getVaccineByID"]
  
    res.send(`This is Flu vaccine with the id of ${vaccine_id}`)
})

console.log("We are listening at 9000")
app.listen(9000) 

