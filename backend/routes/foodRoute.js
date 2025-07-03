import express from 'express';
import { addFood, listFood, removeFood } from '../controllers/foodController.js';
import multer from 'multer';
import foodModel from '../models/foodModel.js';

const foodRouter = express.Router();

/*
//Image storage Engine
const storage = multer.diskStorage({
    destination : "uploads",
    filename:(req,file,cb)=>{
        return cb(null,`${Date.now()}${file.originalname}`)
    }
});

const upload = multer({storage: storage});

foodRouter.post('/add',upload.single('image'),addFood);
foodRouter.get('/list',listFood);
foodRouter.post('/remove',removeFood);

*/
foodRouter.get('/', async (req, res) => {
  try {
    const foods = await foodModel.find({});
    res.json(foods);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});


export default foodRouter;
