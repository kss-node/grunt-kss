'use strict';

var kss = require('kss');

module.exports = function(grunt) {
  grunt.registerMultiTask('kss', 'Generate style guide with KSS.', function() {

    var done = this.async();

    var options = this.options({});

    // Add source and destination from Grunt.
    options.source = [];
    this.files.forEach(function(file) {
      options.destination = file.dest;
      for (var i = 0; i < file.src.length; i++) {
        options.source.push(file.src[i]);
      }
    });

    // Use promise to make sure done() is called when kss() ends
    Promise.all([kss(options)]).then(function(values) {
      done();
    }).catch(error => {
      // Kss prints the error itself, otherwise use grunt.log.error(error);
      done(false);
    });
  });
};
