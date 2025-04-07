import express from 'express';
import { addToCart,removeFromCart,getCart } from '../controllers/cartController.js';


const cartRouter = express.Router();

cartRouter.post('/addC', addToCart);

cartRouter.post('/removeC', removeFromCart);

cartRouter.get('/getC', getCart);

export default cartRouter;