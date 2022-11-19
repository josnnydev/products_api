import mongoose from "mongoose";

mongoose.connect('mongodb://127.0.0.1:27017/companydb');
try{
    console.log('connected to database')
}catch(e){
    console.log(`no connected`)
}