'use strict';

var express = require('express');
var router  = express.Router();
var Wikipedia = require('../lib/Wikipedia');
var whitelist = require('../lib/NameHash');

/**
 * endpoints to be consumed by the front end (ie. Backbone.Model.fetch)
 */
router.get('/', function (req, res) {
    var wikipedia = new Wikipedia ();
    var name = req.query.name || '';
    name = whitelist[name.toLowerCase()] || name;
    wikipedia.getCelebrity(name, req.query.wikidata).always(function(resp){
        res.send(resp);
    });
});

module.exports = router;
