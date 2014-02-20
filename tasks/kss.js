/*
 * grunt-kss
 * https://github.com/t32k/grunt-kss
 *
 * Copyright (c) 2013 Koji Ishimoto
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

  grunt.registerMultiTask('kss', 'Generate styleguide by KSS.', function() {

    var fs = require('fs'),
        path = require('path'),
        exec = require('child_process').exec,
        done = this.async();

    var kssArgs = [],
        realPath = path.dirname(fs.realpathSync(__filename)).replace(/\/tasks/g, '') + '/node_modules/kss/bin/kss-node';
        //command = { cmd: realPath, args: kssArgs };

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
    
    console.log(realPath);
    exec('node ' + realPath + ' ' + kssArgs.join(' '), putInfo);
    //grunt.verbose.ok('`kss-node ' + command.args.join(' ') + '` was initiated.');

  });
};