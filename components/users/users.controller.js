const userDAO = require('./users.dao');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const userController = {}


userController.signin= async (req,res)=>{
    const {email, password } = req.body;
    try {
        const existUser = await userDAO.getUser({email});
        if(!existUser)return res.status(404).json({message: "User don't exist."});

        const isPasswordCorrect = await bcrypt.compare(password,existUser.password);
        if(!isPasswordCorrect) return res.status(400).json({message:"Incorrect Credentials."});

        const token = jwt.sign({email:existUser.email, id:existUser._id},'test',{expiresIn:'1h'});
        res.status(200).json({result:existUser,token});
    } catch (error) {
        res.status(500).json({message:"Something went wrong."})
    }
}
userController.signup= async (req,res)=>{
    const { username, email, password,confirmPassword,avatar} = req.body;
    
    try {
        const existUserName = await userDAO.getUser({username});
        if(existUserName) return res.status(400).json({message:'Username in use.'});
        const existEmail = await userDAO.getUser({email});
        if(existEmail) return res.status(400).json({message:'Email already register.'});

        if(password !== confirmPassword)return res.status(400).json({message:"Passwords don't match"});
        const salt = await bcrypt.genSalt(10);
        const hashedPassword =  await bcrypt.hash(password,salt);
        const newUser = await userDAO.createUser({username,email, password: hashedPassword,avatar });
        const token = jwt.sign({email: newUser.email, id: newUser._id},'test',{expiresIn:'1h'});
        res.status(200).json({result: newUser,token});
    } catch (error) {
        console.log(error)
        res.status(500).json({message:'Something went wrongs'});
    }
}

userController.getUsers = async (req,res)=>{
    try {
        const users = await userDAO.getUsers();
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({message:'Something went wrongs'});
    }
}

userController.editProfile = async (req, res)=>{
    const {username, avatar } = req.body;

    try {
        const validId =await userDAO.validateId(req.userId);
        if(!validId){return res.status(404).send('No User With this Id')}
        
        const existUserName = await userDAO.getUser({username});
        if(existUserName&&username!==validId.username) return res.status(400).json({message:'Username in use.'});
        const editUser = await userDAO.editUser(req.userId,{username,avatar });
        return res.status(200).json({result:editUser,message:'Update Successfully'})


    } catch (error) {
        console.log(error)
        return res.status(500).json({message:'Something went wrongs'})
    }

}
userController.editEmail = async (req, res)=>{
    const { email } = req.body;

    try {
        const validId =await userDAO.validateId(req.userId);
        if(!validId){return res.status(404).send('No User With this Id')}

        const existEmail = await userDAO.getUser({email});
        if(existEmail&&email!==validId.email) return res.status(400).json({message:'Email already register.'});
        const editUser = await userDAO.editUser(req.userId,{ email });
        return res.status(200).json({result:editUser,message:'Update Successfully'})
       
    } catch (error) {
        console.log(error)
        return res.status(500).json({message:'Something went wrongs'})
    }

}
userController.editPassword = async (req, res)=>{
    const { oldPassword, newPassword, confirmPassword} = req.body;

    try {
       const validId =await userDAO.validateId(req.userId);
        if(!validId){return res.status(404).send('No User With this Id')};

        const isOldPasswordCorrect = await bcrypt.compare(oldPassword,validId.password);
        if(!isOldPasswordCorrect) return res.status(400).json({message:"Incorrect Old Password."});

        if(newPassword!==confirmPassword) return res.status(400).json({message:"Password don't match."})

        const salt =  await bcrypt.genSalt(10);
        const hashedNewPassword = await bcrypt.hash(newPassword,salt);

        const editUser = await userDAO.editUser(req.userId,{ password:hashedNewPassword });
        return res.status(200).json({result:editUser,message:'Update Successfully'})
    } catch (error) {
        console.log(error)
        return res.status(500).json({message:'Something went wrongs'})
    }

}

userController.deleteUser = async (req, res)=>{
    const {id} = req.params;
    const {password} = req.body;
    try {
        const existUser = await userDAO.getUserId(id);
        if(!existUser)return res.status(404).json({message:"User dont exist."});

        const isPasswordCorrect = await bcrypt.compare(password,existUser.password);
        if(!isPasswordCorrect) return res.status(400).json({message:"Invalid Credentials"});

        const userDelete = await userDAO.deleteUser(id);

        res.status(200).json({message:`User ${userDelete.username} Deleted`})
    } catch (error) {
        
    }
}
module.exports = userController;