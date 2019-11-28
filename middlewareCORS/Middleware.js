const express = require('express');

const LoggMiddleware = (req,res,next) =>{
    console.log(`Logged  ${req.url}  ${req.method} -- ${new Date()}`)
    next();
}

const app = express()

app.use(LoggMiddleware);


app.get('/users',(req,res)=>{
    res.json({
        'status':true
    })
})


app.post('/save',(req,res)=>{
    res.json({
        'status':true
    })
})

app.listen(3002,(req,res)=>{
    console.log('server running on port 3002')
})