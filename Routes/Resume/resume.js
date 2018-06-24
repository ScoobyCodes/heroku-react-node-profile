const express = require('express');
const router = express.Router();
var path = require('path');
const fs = require('fs');

router.get('/',function(req,res) {
    res.sendFile(__dirname + '/Resume.pdf');
});

module.exports = router;