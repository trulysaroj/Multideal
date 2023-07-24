
const Users=require('../models/user')

const checkIfUserExists=async(req,res)=>{
    const data=await Users.findOne({email:req.params.email})
    if(data){
        res.json({
            msg:"This Email address already exists",
            validEmail:false
        })
    }else{
        res.json({
            validEmail:true
        })
    }
}

const registerUser=async(req, res) => {
    await Users.create(req.body)
    res.json({
      msg: "Congrats, you are successfully registered!"
    })
  }

module.exports={checkIfUserExists,registerUser}