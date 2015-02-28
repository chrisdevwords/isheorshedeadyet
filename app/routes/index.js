'use strict';

var express = require('express');
var router  = express.Router();
var Wikipedia = require('../lib/Wikipedia');
var _ = require('underscore');

/* GET home page */
router.get('/', function (req, res) {

    var name = req.query.name;
    var search = new Wikipedia();
    if (_.isEmpty(name)) {
        res.render('index', {
            serverVars : {}
        });
        return;
    }
    search.getCelebrity(name, false)
        .always(function(resp) {
            res.render('index', {
                serverVars : {
                    data : resp.data,
                    name : name
                }
            });
        });

});

module.exports = router;
