# grunt-kss

[![Build Status](https://secure.travis-ci.org/t32k/grunt-kss.svg?branch=master)](http://travis-ci.org/t32k/grunt-kss) 
[![NPM version](https://badge.fury.io/js/grunt-kss.svg)](http://badge.fury.io/js/grunt-kss)
[![Dependency Status](https://david-dm.org/t32k/grunt-kss.svg)](https://david-dm.org/t32k/grunt-kss)

> KSS styleguide generator for grunt.

## Getting Started
This plugin requires Grunt `~0.4.x`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-kss --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-kss');
```

## The "kss" config and an example task

### Overview
To set up the kss config, add a section named `kss` to the data object passed into `grunt.initConfig()`, in your project's Gruntfile.

```js
grunt.initConfig({
  kss: {
    options: {
      css: '/path/to/style.css',
    },
    dist: {
	    files: {
	      '/path/to/destdir': ['/path/to/sourcedir']
	    }
  	}
  }
});
```

Then, once you've added the config information above, you can add the kss build step to an existing task (not shown) or can create your own task. Here is an example task that you can create:

```js
grunt.registerTask('styleguide', [
  // Add other tasks here if needed
  'kss'
  // Add other tasks here if needed
]);
```

Finally, you can call kss by running `grunt styleguide`.

### Options

#### options.template
Type: `String`
Default value: `null`

A string value that is used to use a custom template to build your styleguide.

#### options.helpers
Type: `String`
Default value: `null`

Specify the location of custom handlebars helpers; see
http://bit.ly/kss-helpers

#### options.mask
Type: `String`
Default value: `null`

A string value that is used to use a custom mask for detecting stylesheets.

#### options.custom
Type: `String`
Default value: `null`

A string value that is used to use a custom property name when parsing KSS comments.

#### options.css
Type: `String`
Default value: `null`

A string value that is used to use including a CSS stylesheet for your styleguide.

#### options.js
Type: `String`
Default value: `null`

A string value that is used to use including a JavaScript file for your styleguide.

#### options.config
Type: `String`
Default value: `null`

Load the kss-node configuration from a JSON file

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).