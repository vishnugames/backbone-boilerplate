(function () {
    'use strict';
    define([
        'jquery',
        'backbone'
    ], function ($, Backbone) {
        return Backbone.View.extend({
            el: '#view',

            files: [],

            events: {},

            initialize: function () {
                this.render();
            },

            render: function () {}
        });
    });
})();
