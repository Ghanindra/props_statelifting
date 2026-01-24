const mongoose=require('mongoose')

const userSchema= new mongoose.Schema({
    username:{type:String,required:true},
    email:{type:String,required:true,unique:true},
    phone:{type:String,required:true,unique:true},
    image:{type:String,requird:true},

})
module.exports=  mongoose.model("User",userSchema);