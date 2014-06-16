'use strict';
module.exports = function (grunt) {

    // Load the project's grunt tasks from a directory
    require('grunt-config-dir')(grunt, {
        configDir: require('path').resolve('grunt-tasks'),
        verbose: true
    }, (function (err) { console.log(err); }));

    // Register group tasks
    grunt.registerTask('default', ['browserify', 'uglify:all']);
  

};
