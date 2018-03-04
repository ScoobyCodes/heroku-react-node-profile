const express = require('express');
const router = express.Router();
var path = require('path');

router.get('/',function(req,res) {
    const file = path.join(__dirname, '/Resume.pdf');

    res.download(file);
})
module.exports = router;