'use strict';

var _ = require('underscore');
var Backbone = require('backbone');

module.exports = Backbone.View.extend({

    el : '#main',

    events : {

    },

    initialize : function (options) {

        var _this = this;
        var msg;

        if (_.isEmpty(options.sv.name)) {
            _this.$('.content-wrap').html('<p>show form.</p>');
            return;
        }

        $.ajax({
            type: "GET",
            url: "/api/?name=" + options.sv.name,
            contentType: "application/json; charset=utf-8",
            async: false,
            dataType: "json",
            success: function (resp, textStatus, jqXHR) {
                console.log(resp.data);
                if (resp.data.wikiResp) {
                    msg = resp.data.wikiResp.title;
                    if (resp.data.isCelebrity) {
                        if (resp.data.isDead) {
                            msg += ' is fucking dead.'
                        } else {
                            msg += ' is not dead.'
                        }
                    } else {
                        msg += ' is not a celebrity. Who cares?'
                    }
                } else {
                    msg = 'show error.';
                }
                _this.$('.content-wrap').html('<p>' + msg + '</p>');

            },
            error: function (errorMessage) {
                _this.$('.content-wrap').html('<p>show error.</p>');
            }
        });



    }


});
