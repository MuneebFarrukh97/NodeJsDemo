const UserServices = require('../services/user_services');

exports.register = async(req,res,next)=>{
    try{
        const {email,password} = req.body;

        const successRes = await UserServices.registerUser(email,password);

        res.json({status:true,success:"User Registered Successfully"});
    }
    catch(err){
        throw err
    }
}

exports.login = async(req,res,next)=>{
    try{
        const {email,password} = req.body;

        const user = await UserServices.checkUser(email);

        if(!user){
            throw new Error("User not exists");
        }

        const isMatch = await user.comparePaswword(password);

        if(isMatch === false){
            throw new Error("Password Invalid");
        }

        let tokenData = {_id:user._id,email:user.email};

        const token = await UserServices.generateToken(tokenData,"secretKey","1h");

        res.status(200).json({status:true,token:token});
    }
    catch(err){
        res.json({status:false});
        // throw err
    }
}