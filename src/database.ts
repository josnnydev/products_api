import mongoose from "mongoose";
import config from './config/config'

mongoose.connect(config.DB.URI);
try{
    console.log('connected to database')
}catch(e){
    console.log(`no connected`)
    process.exit(0)
}