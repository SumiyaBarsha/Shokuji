import express from 'express';
import cors from 'cors';
import { connectDB } from './config/db.js';
import foodRouter from './routes/foodRoute.js';
import bodyParser from 'body-parser';
import userRouter from './routes/userRoute.js';
import 'dotenv/config'
import cartRouter from './routes/cartRoute.js';
import orderRouter from './routes/orderRoute.js';

//app config
const app = express();
const port = 4000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true })); // For parsing form data

//middlewares
app.use(express.json());
app.use(cors());

//db connection
connectDB();

//api endpoints
app.use('/api/food', foodRouter);
app.use('/images', express.static('uploads'));
app.use('/api/user',userRouter);
app.use('/api/cart', cartRouter);
app.use('/api/order', orderRouter);

app.get('/', (req,res)=> {
    res.send("API working")
})

//app.listen(port, ()=> {
//   console.log(`server running on http://localhost:${port}`);
//   });


if (process.env.NODE_ENV !== 'production') {
  app.listen(port, () => {
    console.log(`server running on http://localhost:${port}`);
  });
}

export default app;

