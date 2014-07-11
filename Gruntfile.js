module.exports = function(grunt) {
  'use strict';

  require('load-grunt-tasks')(grunt);
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    concat: {
      options: {
        separator: '\n'
      },
      dist: {
        src: [
          'src/prefix.js',
          'src/point.js',
          'src/matrix.js'
        ],
        dest: 'dist/<%= pkg.name %>.js'
      }
    },
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("dd-mm-yyyy") %> */\n'
      },
      dist: {
        files: {
          'dist/<%= pkg.name %>.min.js': ['<%= concat.dist.dest %>']
        }
      }
    },
    karma: {
      unit: {
        configFile: 'karma.conf.js'
      }
    },

    connect: {
      options: {
        hostname: 'localhost'
      },
      test: {
        options:{
          open: false,
          port: 9001,
          middleware: function(connect) {
            return [
              // connect.static('.tmp'),
              connect.static('test'),
              connect().use('/bower_components', connect.static('./bower_components')),
              connect.static('src')
            ];
          }
        }
      },
      demo: {
        options: {
          open: false,
          port: 9000,
          base: ['bower_components', 'src', 'debug']
        }
      }
    },

    mocha: {
      all: {
        options: {
          run: true,
          urls: ['http://<%= connect.test.options.hostname %>:<%= connect.test.options.port %>/index.html']
        }
      }
    },

    localtunnel: {
      debug: {
        options: {
          port: 9000,
          subdomain: 'svgroovy',
          keepalive: true
        }
      }
    }
  });

  grunt.registerTask('default', ['karma', 'concat', 'uglify']);
  grunt.registerTask('test', ['connect:test', 'mocha']);
  grunt.registerTask('sandpit', ['connect:demo', 'localtunnel:debug']);
};