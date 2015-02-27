'use strict';

var express = require('express');
var router  = express.Router();

/**
 * endpoints to be consumed by the front end (ie. Backbone.Model.fetch)
 */
router.get('/', function (req, res) {
    res.send({})
});

module.exports = router;
