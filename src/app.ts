import express from 'express';
import {Request,Response} from 'express';
import morgan from 'morgan';
const app = express();

import productsRoutes from './routes/products.route';

app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.use(morgan('dev'))

app.get('/',(req:Request,res:Response)=>{
    res.json({
        autor:"josnnydev",
        description:"welcome my project",
        version:"1.0.0"
    })
})

app.use('/products',productsRoutes)


export default app;