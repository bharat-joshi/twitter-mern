import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'
import cookies from 'cookie'
dotenv.config({
    path: '../config/.env'
});
export const IsAuthenticated = async (req,res,next) => {
    try {
        console.log("authenticated called")
    
        console.log(res.cookies);
        
        const token = res.cookies
        console.log(token)
        if(!token) return res.status(401).json({message:"Unauthorized"});

        const decode = jwt.verify(token,process.env.TOKEN_SECRET);
        req.user = decode;
        next();

    } catch (error) {
        console.log(error.message)
        
    }

}