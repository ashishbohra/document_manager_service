'use strict'

const multer = require("multer")
var path = require('path');
var fs = require('fs');

var storage = multer.diskStorage({
   destination: function (req, file, cb) {
      var basedir = path.dirname(path.basename(__dirname))  +'/Uploads';
      if (!fs.existsSync(basedir)){
        fs.mkdirSync(basedir);
      }

      var userDir = basedir +'/'+ req.query.key;
      if (!fs.existsSync(userDir)){
        fs.mkdirSync(userDir);
      }
      cb(null, userDir);
   },
   filename: function (req, file, cb) {
      cb(null, Date.now() + '-' + file.originalname);
   }
});
var upload = multer({ 
   storage: storage ,
   fileFilter:function(req,file,cb)
   {
      if (!file.originalname.match(/\.(jpg|JPG|jpeg|JPEG|png|PNG|gif|GIF|pdf|PDF|xls|XLS|txt|TXT|tiff|TIFF|xlsx|XLSX|doc|DOC|docx|DOCX|pptx|PPTX|ppt|PPT)$/)) {
         req.fileValidationError = 'file not in specified document format';
         return cb(new Error('Format not supported'), false);
     }
     else{
      cb(null,true);
     }
   },
   limits:{
      fileSize:1024*1024*1024*1024*2
   }
});



module.exports=upload;
