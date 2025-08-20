import express from 'express';
import cors from 'cors';
import { connectDB } from './config/db.js';
import foodRouter from './routes/foodRoute.js';
import bodyParser from 'body-parser';
import userRouter from './routes/userRoute.js';
import 'dotenv/config'
import cartRouter from './routes/cartRoute.js';
import orderRouter from './routes/orderRoute.js';
import path from 'path';

//app config
const app = express();
const port = 4000;
// Serve static files with proper MIME types
app.use('/Shokuji', express.static(path.join(__dirname, 'dist'), {
  setHeaders: (res, filePath) => {
    if (filePath.endsWith('.css')) {
      res.setHeader('Content-Type', 'text/css');
    } else if (filePath.endsWith('.js')) {
      res.setHeader('Content-Type', 'application/javascript');
    }
  }
}));

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

app.listen(port, ()=> {
   console.log(`server running on http://localhost:${port}`);
   });






