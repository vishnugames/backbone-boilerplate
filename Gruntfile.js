module.exports = function(grunt) {
    // Project configuration.
    grunt.initConfig({
        jshint: {
            all: {
                src: 'app/*/**.js',
                options: {
                    globals   : {
                        "define": false
                    },
                    ignores: ['app/lib/**/*.js', 'app/js/**/*.js'],
                    esversion: 6,
                    reporterOutput: '',
                    bitwise: true,
                    camelcase: true,
                    curly: true,
                    eqeqeq: true,
                    forin: true,
                    immed: true,
                    indent: 4,
                    latedef: true,
                    newcap: true,
                    noarg: true,
                    noempty: true,
                    nonew: true,
                    quotmark: 'single',
                    regexp: true,
                    undef: true,
                    unused: true,
                    trailing: true,
                    maxlen: 120
                }
            }
        },
        watch: {
            jshint: {
                files: 'app/*/**.js',
                tasks: 'jshint'
            },
            sass: {
                files: 'app/css/*.css',
                tasks: 'sass'
            }
        },
        handlebars: {
            all: {
                files: {
                    'app/js/templates.js': 'app/templates/*.hbs'
                },
                options: {
                    exportAMD: true,
                    returnTemplates: true
                }
            }
        },
        sass: {
            dist: {
                files: [{
                    'app/css/main.css': 'app/scss/main.scss'
                }]
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-handlebars-compiler');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('default', ['jshint']);
    grunt.registerTask('build', ['handlebars', 'sass', 'jshint']);


};
