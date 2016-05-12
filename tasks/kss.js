/*
 * grunt-kss
 * https://github.com/t32k/grunt-kss
 *
 * Copyright (c) 2013 Koji Ishimoto
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function (grunt) {

  grunt.registerMultiTask('kss', 'Generate style guide by kss-node.', function () {

    var fs = require('fs'),
      path = require('path'),
      exec = require('child_process').exec,
      done = this.async();

    var kssCmd = ['node'],
      realPath = path.dirname(__filename).replace(/tasks$/g, ''),
      dest = process.cwd();

    var opts = this.options({
      template: null,
      helpers: null,
      mask: null,
      custom: null,
      css: null,
      js: null,
      config: null
    });

    kssCmd.push(realPath + 'node_modules/kss/bin/kss-node');

    this.files.forEach(function (file) {
      kssCmd.push("'" + file.src[0] + "'");
      kssCmd.push("'" + file.dest + "'");
      dest = file.dest;
    });

    if (opts.template !== null) {
      kssCmd.push('--template', opts.template);
    }
    if (opts.helpers !== null) {
      kssCmd.push('--helpers', opts.helpers);
    }
    if (opts.mask !== null) {
      kssCmd.push('--mask', opts.mask);
    }
    if (opts.custom !== null) {
      kssCmd.push('--custom', opts.custom);
    }
    if (opts.css !== null) {
      kssCmd.push('--css', opts.css);
    }
    if (opts.js !== null) {
      kssCmd.push('--js', opts.js);
    }
    if (opts.config !== null) {
      kssCmd.push('--config', opts.config);
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

    // Execute
    exec(kssCmd.join(' '), putInfo);
    var logs = kssCmd.slice(2);
    grunt.log.ok('kss-node ' + logs.join(' '));

  });
};