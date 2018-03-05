const express = require('express');
const router = express.Router();
var path = require('path');

router.post('/',function(req,res) {
    const file = path.join(__dirname, '/Resume.pdf');
    res.download(file);
});

module.exports = router;