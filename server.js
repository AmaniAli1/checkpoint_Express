const express=require('express');
const  app=express();
const port=5000;

const Middleware =(req,res,next)=>{
    let date=new Date();
    console.log("the server recieved the request at this time : ",date)
    let day=date.getDay();
    console.log(day)
    let hour=date.getHours();
    console.log(hour)
    if((day>=1 && day<=5 && hour>=9 && hour<=17)===true){
        res.send("<h1>Application not available in this time , try later !</h1>")
    }
     next()
}


app.get('/',(req,res)=>{
    res.sendFile(__dirname+'/Public/app/')
})
app.get('/service',(req,res)=>{
    
    res.sendFile(__dirname+'/Public/app/service.html')
})
app.get('/contact',(req,res)=>{
    
    res.sendFile(__dirname+'/Public/app/contact.html')
})


app.get('/styles.css',(req,res)=>{
    res.sendFile(__dirname+'/Public/app/styles.css')
})
app.listen(port,(err)=>{
    if(err){
        console.log("server not running ! ")
    }else{
        console.log("server is running ! ")
    }
})
app.use(Middleware)
app.use(express.static(__dirname+'/app'))