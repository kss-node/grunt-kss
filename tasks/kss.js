/*
 * grunt-kss
 * https://github.com/t32k/grunt-kss
 *
 * Copyright (c) 2013 Koji Ishimoto
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

  grunt.registerMultiTask('kss', 'Your task description goes here.', function() {

    var path = require('path'),
        fs = require('fs'),
        done = this.async();

    var kssArgs = [],
        realPath = path.dirname(fs.realpathSync(__filename)) + '/../node_modules/kss/bin/kss-node',
        command = { cmd: realPath, args: kssArgs };

    var opts = this.options({
      template: null,
      includeType: null,
      includePath: null,
      mask: null
    });

    this.files.forEach(function(file) {
      kssArgs.push(file.src[0]);
      kssArgs.push(file.dest);
    });

    if (opts.template !== null) {
      kssArgs.push('--template', opts.template);
    }

    if (opts.mask !== null) {
      kssArgs.push('--mask', opts.mask);
    }

    if (opts.includeType !== null && opts.includePath !== null ) {
      kssArgs.push('--' + opts.includeType, opts.includePath);
    } 

    var putInfo = function (error, result, code) {
      if (error !== null) {
        grunt.log.error(error);
        grunt.log.error('Code: ' + code);
      } else {
        grunt.log.write(result);
      }
      done();
    };
    
    grunt.util.spawn(command, putInfo);
    grunt.verbose.ok('`kss-node ' + command.args.join(' ') + '` was initiated.');

  });
};