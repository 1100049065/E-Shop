import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import { notFound, errorHandler } from './middleware/errorMiddleware.js';
import colors from 'colors';


import productRoutes from './routes/productRoutes.js';
dotenv.config();
connectDB();

const app = express()

app.use((req, res, next)=>{
  console.log(req.originalUrl)
  next()
})

app.get('/', (req, res) => {
  res.send('API is running...')
})

app.use('/api/products', productRoutes);

app.use(notFound)

app.use(errorHandler)

const PORT = process.env.PORT || 5000;
const ENV = process.env.NODE_ENV || 'Dev';
app.listen(PORT, console.log(`${ ENV } Server running on port ${ PORT }`.yellow.bold))
