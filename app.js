requirejs.config({
    baseUrl: 'app',
    paths: {
        jquery: 'lib/jquery',
        underscore: 'lib/underscore',
        backbone: 'lib/backbone',
        bootstrap: 'lib/bootstrap.min',
        handlebars: 'lib/handlebars.min-latest'
    },
    shim: {
        bootstrap: {
            deps: ['jquery']
        }
    }
});

requirejs(['main']);
