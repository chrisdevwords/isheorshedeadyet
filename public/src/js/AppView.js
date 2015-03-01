'use strict';

var _ = require('underscore');
var Backbone = require('backbone');
var templates = require('../templates/templates')

module.exports = Backbone.View.extend({

    el : '#content',

    events : {

    },

    initialize : function (options) {
        this.model = new Backbone.Model(options.sv.data);
        this.render();
    },

    getTemplateVars : function () {

        var model = this.model.toJSON();
        var header = 'Oh, hey.';
        var msg = '';
        var placeholder = 'Name a celebrity...';

        if (model.title) {
            msg += model.title;
            if (!model.isCelebrity) {
                msg += ', that\'s not a celebrity. So who cares?';
                placeholder = 'Name someone else...';
            } else {
                header = model.isDead ? 'Yep.' : 'Nope.';
                msg += model.isDead ? ' is fucking dead.' : ' is not dead.';
                placeholder = 'Name another celebrity...';
             }
        } else if (model.code === 'missingtitle') {
            header = 'Um...';
            msg = 'Not sure who that is. Did you spell it right?';
        }

        return _.extend({
            header : header,
            message : msg,
            placeholder: placeholder
        }, model);
    },

    render : function () {
        var tmplVars = this.getTemplateVars();
        this.$el.html(templates.main(tmplVars));
        this.$el.append(templates.searchForm(tmplVars));
    }


});
