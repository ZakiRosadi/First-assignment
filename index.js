const { log } = require('console')
const express = require ('express') //import
const app = express() // execute and save it in variable
const port = 5000 // address

app.get ('/zaki', (request, response) => {                //service
    response.send(" wadap")

})
app.get ('/rosadi', (request, response) => {                //service
    response.send(" wadap yok")

})

app.listen (port, ()=>{
    console.log("app on 5000")
})