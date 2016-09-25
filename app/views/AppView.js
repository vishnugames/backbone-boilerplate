(function () {
    'use strict';
    define([
        'jquery',
        'backbone',
        'js/templates'
    ], function ($, Backbone, Templates) {
        return Backbone.View.extend({
            el: 'body',

            data: {title: 'Template'},

            files: [],

            events: {},

            initialize: function () {
                this.render();
            },

            render: function () {
                var html = Templates.login(this.data);
                this.$el.find('#view').html(html);
            }
        });
    });

})();
