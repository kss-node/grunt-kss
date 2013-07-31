/*
 * grunt-kss
 * https://github.com/t32k/grunt-kss
 *
 * Copyright (c) 2013 Koji Ishimoto
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

  var exec = require('child_process').exec;


  grunt.registerMultiTask('kss', 'Your task description goes here.', function() {

    var done = this.async();

    var src, dest;

    var options = this.options({
      template: null,
      include: null,
      mask: null,
      init: null
    });

    function puts (error, stdout, stderr) {
      if (error !== null) {
        grunt.log.error(stderr);
      } else {
        grunt.log.write(stdout);
      }
      done();
    }

    this.files.forEach(function(file) {

      src = file.src[0];
      dest = file.dest;

    });

    exec('kss-node '+ src + ' ' + dest + ' --sass test/fixtures/button.scss', puts);


  });

};

