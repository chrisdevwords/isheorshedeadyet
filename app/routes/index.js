'use strict';

var express = require('express');
var router  = express.Router();

/* GET home page */
router.get('/', function (req, res) {

    var name = req.query.name;

    if (req.params && req.params.length) {
        //name = req.params.join(' ');
    }



    res.render('index', {
        serverVars : {
            name : name
        }
    });

});

module.exports = router;
