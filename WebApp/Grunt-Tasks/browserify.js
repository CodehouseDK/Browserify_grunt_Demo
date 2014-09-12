'use strict';
var path = require('path');
module.exports = function browserify(grunt) {
    // Load task
   
    grunt.loadNpmTasks('grunt-browserify');
    // Options
    return {
        client: {
            files: {
                'webapp/scripts/app.js': ['webapp/scripts/main.js'],
            },
            options: {
                require: ['jquery'],
                alias: [
                   'webapp/scripts/lib/crossroads/signals.js:signals',
                   'webapp/scripts/lib/crossroads/crossroads.js:crossroads'
                ]
                
            }
        }

    };
};