'use strict';
module.exports = function uglify(grunt) {
    // Load task
    grunt.loadNpmTasks('grunt-contrib-uglify');
    // Options
    return {
        all: {
            options: {
                sourceMap: true,
                mangle: true
            },
            files: {
                'webapp/scripts/app.min.js': [ 'webapp/scripts/app.js'],
            }
        }
    };
};