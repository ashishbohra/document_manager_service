const express =  require('express');
const app = express();
var cors = require('cors')

var router=express.Router();

var uploadRoute = require("./Services/UploadService");


app.use('/upload',uploadRoute);

app.listen(5000, function () {
    console.log('Server started on port 5000...');
});
