const knex=require("./DataBaseConection");
const { GenrateToken } = require('./jwt');


// 1. register User. 

const signup=async(req,res)=>{
    try{
        await knex("UserData").insert(req.body);
        res.send({data:req.body,message:"your account is created successfuly...!"});
        console.log("your account is created successfuly...!");
    }
    catch(error){
        res.send("your account is not created...!");
        console.log("your account is not created...!",error);
        
    };
};
// 2. Login User with JWT (authantication)

const Login_user=async(req,res)=>{
    const {id,name}=req.body
    try{
        const info=await knex("UserData").where({id:id,Name:name});
        if(!info == ''){
            let token = GenrateToken(id)
            req.session.token = token
            console.log("Logged in successfully....");
            res.send('Logged in successfully');
        }else{
            res.json({message:'id or Name is wrong'})
        }

    }catch(error){
        console.log(error);
    }
}

//3. logout user.

const logout_user=(req, res) => {
    // Destroy the session
    req.session.destroy((err) => {
      if (err) {
        console.error(err);
      }
      // Redirect the user to the login page or any other desired page
    //   res.redirect('/login');
    console.log('logout sucessfully...');
    res.send('logout suceefully...')
    });
}
// Home page .

const home=(req,res)=>{
    const user = req.session.token;
    // Access the stored data
    if (user) {
      res.status(200).send('authorized');
    } else {
      res.status(401).send('Unauthorized');
    }
}


module.exports={
    signup,
    Login_user,
    logout_user,
    home

}