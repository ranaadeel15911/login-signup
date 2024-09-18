import Auth from "../model/auth.js"
import bcryptjs from "bcryptjs"
import jwt from "jsonwebtoken"
class Formcontroller{
    static signup=async(req,resp)=>{
        // console.log(req.body)
        const {email,password,username}= req.body
try {
    const genSalt = await bcryptjs.genSalt(10)
    const hashedPassword = await bcryptjs.hash(password,genSalt)
    if (email,password) {
        const newuser = new Auth({
            email: email,
            password: hashedPassword,
            username: username
        }) 
        newuser.save().then((data)=>{
           return resp.status(200).json(data)
        }).catch((err)=>resp.status(400).json(err))
    }
    else{
        resp.status(400).json({error:'please fill all the fields'})
    }
} catch (error) {
    resp.status(400).json({error:'something went wrong'})
    
}
    }
    static login=async(req,resp)=>{
        const {email,password}= req.body
try {
    if (email,password) {
        const user = await Auth.findOne({email: email})
        console.log(user)
        if (user.email == email &&(await bcryptjs.compare(password,user.password)) ) {
            const token = jwt.sign({userId:user._id},"somesecret",{expiresIn:'2d'}) 

            return resp.status(200).json({
                message:'Loged in successfully',
                token,
                username:user.username})
        }
        else{
            return resp.status(400).json({error:'invalid credentials'})
        }
    }
    else{
        resp.status(400).json({error:'please fill all the fields'})
    }
} catch (error) {
    resp.status(400).json({error:'something went wrong'})
}
    }
    static Check = (req,resp)=>{
        console.log(req.user)
        console.log('Helo Middleware checked')
        resp.status(200).json(req.user)
    }
}

export default Formcontroller