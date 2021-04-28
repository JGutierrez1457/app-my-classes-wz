const userDAO = require('./users.dao');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const userController = {}

userController.getUsers = async (req,res)=>{
    try {
        const users = await userDAO.getUsers();
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({message:'Something went wrongs'});
    }
}
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
    const { username, email, password,avatar} = req.body;
    
    try {
        const existUserName = await userDAO.getUser({username});
        if(existUserName) return res.status(400).json({message:'Username in use.'});
        const existEmail = await userDAO.getUser({email});
        if(existEmail) return res.status(400).json({message:'Email already register.'});

/*         if(password !== confirmPassword)return res.status(400).json({message:"Passwords don't match"}); */
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