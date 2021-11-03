var exp=require('express');

var app=exp();

var bp=require('body-parser');


app.use(bp.urlencoded({extended:true}));



app.get("/",function (req,res) {

    res.sendFile(__dirname+ "/bmi.html");

    
})


app.post("/",function (req,res) {

    var n=parseFloat(req.body.n);
    var m=parseFloat(req.body.m);


    var ans= n/(m*m);

    res.send("The bmi is   " + ans + ".");

})




app.listen(3000,function () {

    console.log("hello");
    
});