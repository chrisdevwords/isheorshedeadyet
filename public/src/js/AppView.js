'use strict';

var Backbone = require('backbone');

module.exports = Backbone.View.extend({

    el : '#main',

    events : {

    },

    initialize : function (options) {
        this.$('.content-wrap').html('<p>is this thing on?</p>');
    }


});
