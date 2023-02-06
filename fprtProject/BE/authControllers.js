const cloudinary = require('cloudinary').v2;
const { Base64 } = require('js-base64');
const {userModel,blogModel} = require('../schema');
const bcrypt = require('bcrypt');
let jwt = require('jsonwebtoken');


//cloudinary configuration

cloudinary.config({
    cloud_name: 'docch2cvb',
    api_key: '673847735511879',
    api_secret: 'qaSVo3r8ikDiit4P_Qwet_nPNbE'
})

let signUp=async(req,res)=>{
    let userData=req.body;
    
   
    let image = req.file;
    console.log(image);
    const hashedName = await bcrypt.hash(userData.name, 5)
    
    
    await userModel.create({"name":userData.name,"email":userData.email,"password":hashedName,"image":userData.image})

    // let imageString = Base64.encode(image.buffer)
    // let imageData = await cloudinary.uploader.upload(`data:${image.mimetype};base64,${imageString}`)

    console.log(userData);
    console.log("User added successfully!");
    //console.log(imageData.secure_url)
    res.send(userData);
    //res.send('1')

}

let login=async(req,res)=>{

    let {email,password}=req.body

    try {
        
        let user = await userModel.findOne({ email, password })
        console.log(user);
        if (!user) {
            //res.send({ user: 'not found' })
            res.send('0')
        } else {
            //generate toke
            let userPayload = { email: user.email, name: user.name }
            // console.log(userPayload);
            let token = jwt.sign(userPayload,'fprt', { expiresIn: '1d' })
            // console.log(token);
            res.cookie('jwt', token);
            res.send('1');

        
    } }catch (error) {
        console.log("Error occured in login",error);
    }
}

let logout=async(req,res)=>{

    // let token = req.cookies.jwt
    // let userdata = jwt.verify(token,'fprt')
    // let { email, name } = userdata;
    // console.log(email,name);

    res.cookie('jwt', '')
    res.send('1')//success
}

let addBlog=async(req,res)=>{

    let blogData =req.body;

   let result = await blogModel.create(blogData);
   res.send("Blog added successfully");


}

let blog=async (req,res)=>{

    let user = await blogModel.find({ })
    res.send(user)

}


module.exports={
    signUp,login,logout,blog,addBlog
}