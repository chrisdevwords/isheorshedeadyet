'use strict';

var root = window || global;
var $ = require('jquery');
var Backbone = require('backbone');

Backbone.$ = root.jQuery = root.$ = $;

var AppView = require('./AppView');
var app = module.exports = {};

$(function () {
    var SV = root.__SERVER_VARS__ || {};
    app.view = new AppView({sv:SV});
    window.app = app;
});

module.exports = app;
