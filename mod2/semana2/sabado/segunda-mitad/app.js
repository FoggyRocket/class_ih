// app.js
const express = require('express')
const bodyParser = require('body-parser')
const app     = express()
const PunkAPIWrapper = require('punkapi-javascript-wrapper');
const punkAPI = new PunkAPIWrapper();

app.use(bodyParser.json())

app.get('/', function (req, res) {
  console.log(req);
  res.send(
      "Hola esta es mi pagina (Home)"
  )
})
//:params 
app.get("/user/:username",(req,res,next)=>{
    console.log("el REquest",req)
    res.send(req.params)
});

app.get("/user/:username/:fullName",(req,res,next)=>{
    console.log("el REquest",req.params)
    res.json(req.params)
});

/* users/Foggyrocket/Dylan_Torres 
*{
    username:"Foggyrocket",
    fullName:"Dylan_Torres"
}
*/

app.get("/search",(req,res,next)=>{
    // let {perro,dueno,mas} = req.query
    // res.send(`mi Perro se llama ${perro}, y el dueño es ${dueno} y algo extra ${mas}`)
    res.json(req.query)
})

///search?name=Dylan&lastName=Torres


app.post("/login",(req,res,next)=>{
    console.log("que trae el body???",req.body)
    let {password} = req.body
    if(password !== "perro182"){
        res.status(403).json({msg:"No es tu password Morr@"})
    }
    
    res.json({msg:"estas logueado perro"})
});


//middleware

function sayHi(req,res,next){
    //mas valdaciiones 
    if(req.params.isValid === "perro"){
        console.log("Hola morrro 1")
        next()
    }else{
        res.status(403).json({msg:"No es hay perrooo"})
    }
    
}

app.get("/saludo/:isValid",sayHi,(req,res,next)=>{
    console.log("Hola morro 2 ")
    res.send("Holaaaaaaa  entre")
})



app.get("/beers",(req,res,next)=>{

    punkAPI.getRandom()
    .then(randomBeer=>{
        console.log("cerveza",randomBeer)
        res.json(randomBeer)
    })
    .catch(err=>{
        console.log("este es el error",err)
        res.status(400).json(err)
    })

})
app.get("/beers/:id",(req,res,next)=>{
    punkAPI.getBeers()
    .then(beers => {
        console.log("asdl",beers)
        let newBeers = beers.filter((item,i)=>{ 
            let dateFilter = item.first_brewed.split('/') 
            if(dateFilter[1]< 2010) {
                return item
            }
    })
      res.status(200).json(newBeers);
    })
    .catch(err => {
      console.log(err);
      res.status(400).json(err);
    })
})
app.listen(3000, () => console.log('App listening on port 3000!'))
