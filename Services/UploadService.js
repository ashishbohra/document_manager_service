const express =  require('express');
let router=express.Router();

var Upload = require("../MiddleWares/Upload");

router.use(function(req,res,next){
    console.log(req.url,'@',Date.now);
    next();
});

router.route("/data").post( Upload.any("file"), (req, res) => {
    try{
        return res.send({"status": res.statusCode, "response": req.file,"message":"uploaded successfully"})
    }catch(error){
        return res.send({"status": res.statusCode, "error": error})
    }
})



module.exports=router;