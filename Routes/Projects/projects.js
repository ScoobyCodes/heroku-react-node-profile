const Express = require('express');
const router = Express.Router();
const fs  = require('fs');


router.get('/',function(req,res){
    fs.readFile('./Routes/Projects/projects.json','utf8',function(err,data) {
        if(err)  {
            console.log(err);
        }
        res.json(data);
    })
});

module.exports = router;