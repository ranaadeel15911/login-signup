import jwt from "jsonwebtoken"
import Auth from "../model/auth.js";
const checkIsUserAuthenticated = async(req,resp,next)=>{
    let token;
    const {authorization}= req.headers
    console.log(authorization)

    if (authorization && authorization.startsWith("Bearer")) {
        try {
            token = authorization.split(" ")[1];
            let decoded = jwt.verify(token, "somesecret");
            console.log(decoded)
            /* here we find 
            {
            userId: '65e32d6ec50c89f7a114bbd8',
            iat: 1709387684,
            exp: 1709560484
            } */
           let id = decoded.userId
            console.log('reached again')
            req.user = await Auth.findById(id).select("-password")
            console.log(req.user)
next()
        } catch (error) {
         resp.status(400).json({message:'not authenticated'})   
        }
        
    }
    else{
        resp.status(400).json({message:'not authenticated'})
    }

}

export default checkIsUserAuthenticated