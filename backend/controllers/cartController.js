import userModel from '../models/userModel.js';

//add items to user cart
const addToCart = async (req, res) =>{
    try{
        let userData = await userModel.findOne({_id:req.body.userId});
        let cartData = await userData.cartData;
        if(!cartData[req.body.itemId]){
            cartData[req.body.itemId] = 1;
        }
        else{
            cartData[req.body.itemId]++;
        }
        await userModel.findByIdAndUpdate(req.body.userId, {cartData});
        res.json({success:true, message:"Item added to cart"})
    }catch(err){
        console.error(err);
        res.status(500).json({success:false, message:"Error adding item to cart"})
    }
}

//remove items from user cart
const removeFromCart = async (req, res) =>{
    try{
        let userData = await userModel.findById(req.body.userId);
        let cartData = await userData.cartData;
        if(cartData[req.body.itemId]>0){
            cartData[req.body.itemId] -= 1;
        }
        await userModel.findByIdAndUpdate(req.body.userId,{cartData});
        res.json({success: true , message: "Removed  from cart successfully!"})
    }catch(err){
        console.log(err);
        res.json({success:false, message: "Error removing food"});
    }
}

//fetch user cart data
const getCart = async (req, res) =>{
    try{
        let userData = await userModel.findById(req.body.userId);
        let cartData = await userData.cartData;
        res.json({success:true, cartData});
    }catch(err){
        console.log(err);
        res.json({success: false, message: "Error fetching cart data"});
    }
}

export {addToCart, removeFromCart,getCart};