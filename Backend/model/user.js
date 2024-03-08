const mongoose=require('mongoose');

const schema=mongoose.Schema;

const userSchema = new schema({
    firstName: {type:String , required:true},
    lastName: {type:String , required:true},
    email: {type:String},
    password: {type:String , required:true},
    contactNumber: {type:String}, 
});

const User = mongoose.model("User", userSchema);
module.exports =  User;