'use strict';
define([
    'jquery',
    'underscore',
    'backbone',
    'views/SubView'
], function ($, _, Backbone, SubView) {
    return Backbone.Router.extend({
        routes: {
            '/subview': 'subview'
        },

        subview: function () {
            new SubView();
        }
    });
});
