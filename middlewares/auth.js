

const auth =(req,res,next)=>{
    console.log('auth middleware workin fine')
    next();
}


module.exports=auth;