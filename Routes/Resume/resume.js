const express = require('express');
const fs = require('fs');
const router = express.Router();
var path = require('path');

router.get('/',function(req,res) {
    const file = path.join(__dirname, '/Resume.pdf');
    //res.send(file);

    var filename = path.basename(file);

    res.setHeader('Content-disposition', 'attachment; filename=' + filename);

    var filestream = fs.createReadStream(file);
    filestream.pipe(res);
})
module.exports = router;