import foodModel from "../models/foodModel.js"
import fs from 'fs';

// add food item
 const addFood = async(req,res) =>{


    let image_filename = `${req.file.filename}`;

    const food = new foodModel({
        name: req.body.name,
        description: req.body.description,
        price: req.body.price,
        category: req.body.category,
        image: image_filename
    })
    try{
        await food.save();
        res.json({success:true,message:"food saved successfully"})
    }catch(err){
        console.error(err);
        res.status(500).json({success:false, message:"Error saving food"})
    }
 }

 //all food list
 const listFood = async (req, res) => {
    try{
        const foods = await foodModel.find({});
        res.json({success:true,data: foods})
    }catch(err){
        console.error(err);
        res.status(500).json({success:false, message:"Error fetching food list"})
    }
 }

 //remove food item
 const removeFood = async (req, res) => {
    try{
        const food = await foodModel.findById(req.body.id);
        fs.unlink(`uploads/${food.image}`,()=> {});

        await foodModel.findByIdAndDelete(req.body.id);
        res.json({success:true, message:"Food removed successfully"})
    }catch(err){
        console.log(err);
        res.status(500).json({success:false, message:"Error removing food"})
    }
 }

 //update food item

 export {addFood, listFood, removeFood}