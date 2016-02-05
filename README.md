# grunt-kss

[![Build Status](https://secure.travis-ci.org/kss-node/grunt-kss.png?branch=master)](http://travis-ci.org/kss-node/grunt-kss)
[![NPM version](https://badge.fury.io/js/grunt-kss.png)](http://badge.fury.io/js/grunt-kss)

> KSS style guide generator for grunt.

## Getting Started
This plugin requires Grunt `~0.4.5`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-kss --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-kss');
```

## The "kss" task

### Overview
In your project's Gruntfile, add a section named `kss` to the data object passed into `grunt.initConfig()`.

Here's an example:

```js
grunt.initConfig({
  kss: {
    options: {
      verbose: true
    },
    dist: {
      src: ['/path/to/sourcedir'],
      dest: '/path/to/destdir'
    }
  }
})
```

### Options

#### options.template
Type: `String`
Default value: `null`

Use a custom template to build your style guide.

#### options.helpers
Type: `String` or array of `String`
Default value: `null`

Specify location(s) of custom handlebars helpers; see
http://bit.ly/kss-helpers

#### options.mask
Type: `String`
Default value: `null`

Use a custom mask for detecting stylesheets.

#### options.custom
Type: `String` or array of `String`
Default value: `null`

Use custom property name(s) when parsing KSS comments.

#### options.css
Type: `String` or array of `String`
Default value: `null`

Adds CSS stylesheet(s) to your style guide.

#### options.js
Type: `String` or array of `String`
Default value: `null`

Adds JavaScript file(s) to your style guide.

#### options.config
Type: `String`
Default value: `null`

Loads the kss-node configuration from a JSON file.

## Contributing
In lieu of a formal style guide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## Release History

+ v1.0.0: Update to KSS 2.4.0.
+ v0.2.6: Fix "Error: spawn ENOENT" bug for Windows
+ v0.2.4: Fix kss-node module path.
+ v0.2.3: Bump version.
+ v0.2.2: Fix README.
+ v0.2.0: Fix a cmd path.
+ v0.1.0: Release.
