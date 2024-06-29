const mongoose = require("mongoose")
const express = require("express")

const app = express()
app.use(express.json())
mongoose.connect("mongodb+srv://koratjay22:EQ6Djx0nlVH1MV9F@cluster0.b2y4oya.mongodb.net/userappnew")

const User = mongoose.model("Users" , {name: String , email: String , password: String });

app.post("/signup" , function(req,res){
    const name= req.body.name;
    const email= req.body.email;
    const password= req.body.password;

    const existUser = User.findOne({email : email});
    if(!existUser){
        return res.status(400).send("Username already exits");
    }

    const user = new User({
        name: "Jay", 
        email: "koratjay33@gmail.com" , 
        password: "123456789"
    });
    user.save()
    
})
