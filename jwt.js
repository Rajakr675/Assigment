const jwt=require("jsonwebtoken");
const knex = require('./DataBaseConection')

// This function for create a Token.

const GenrateToken=((id)=>{
    return jwt.sign(id,"kldjfkjfkd8745hdxzxz")
})

// This function create for verification.

const verfyToken = async(req,res,next)=>{
    if(req.headers.cookie){
        const Token = req.headers.cookie.split('=')[1]
        const userId = jwt.verify(Token,'kldjfkjfkd8745hdxzxz')
        const UserData = await knex('user_data').where({id:userId})
        req.UserData = UserData
        next()
    }else{
        res.status(401).json({mesg:'Login First'})
    }
}

module.exports = { GenrateToken, verfyToken }