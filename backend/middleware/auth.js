import jwt from 'jsonwebtoken';

const authMiddleware = async (req, res, next) =>{
    const {token} = req.headers;
    if(!token){
        return res.status(401).json({ success: false,msg: 'Not authorized, Login Again!'});
    }

    try{
        const token_decode = jwt.verify(token,process.env.JWT_SECRET);
        req.body.userId = token_decode.id;
        next();

    }catch(err){
        console.error(err.message);
        res.status(403).json({success: false,msg: 'Token is not valid'});

    }
}
export default authMiddleware;