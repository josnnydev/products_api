import user from '../models/User'
import { Request,Response } from 'express'

export const signUp = (req:Request,res:Response)=>{
    res.json('signup')
}
export const signIn = (req:Request,res:Response)=>{
    res.json('signin')
}