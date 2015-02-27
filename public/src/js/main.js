'use strict';

var root = window || global;
var $ = require('jquery');
var Backbone = require('backbone');

Backbone.$ = root.jQuery = root.$ = $;

var AppView = require('./AppView');
var app = module.exports = {};

$(function () {

    var SV = root.__SERVER_VARS__ || {};
    var title = (SV.name || '').split(' ').join('_');

    app.view = new AppView({sv:SV});

    $.ajax({
        type: "GET",
        url: "http://en.wikipedia.org/w/api.php?action=parse&format=json&prop=text&section=0&page=" + title + "&callback=?",
        contentType: "application/json; charset=utf-8",
        async: false,
        dataType: "json",
        success: function (data, textStatus, jqXHR) {
            console.log(data);
            var markup;
            var $blurb;
            if (data.parse) {
                markup = data.parse.text["*"];
                $blurb = $('<div></div>').html(markup);
                if (!$blurb.find('.bday').length) {
                    alert('not a celebrity...');
                } else {
                    if ($blurb.find('.deathdate').length) {
                        alert('dead');
                    } else {
                        alert('not dead');
                    }
                }

            } else {
                alert('no name provided');
            }

            console.log(data);
            console.log($blurb);
        },
        error: function (errorMessage) {
        }
    });
    window.app = app;
});

module.exports = app;
