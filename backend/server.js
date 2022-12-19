import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import colors from 'colors';

import productRoutes from './routes/productRoutes.js';
dotenv.config();
connectDB();

const app = express()

app.get('/', (req, res) => {
  res.send('API is running...')
})

// app.get('/api/products', (req, res) => {
//   res.json(products)
// })

// app.get('/api/products/:id', (req, res) => {
//   const product = products.find((p) => p._id === req.params.id)
//   res.json(product)
// })

app.use('/api/products', productRoutes);
const PORT = process.env.PORT || 5000;
const ENV = process.env.NODE_ENV || 'Dev';
app.listen(PORT, console.log(`${ ENV } Server running on port ${ PORT }`.yellow.bold))
