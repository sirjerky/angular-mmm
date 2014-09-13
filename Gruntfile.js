"use strict";

module.exports = function(grunt){
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-browserify');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-karma');

  grunt.initConfig({
    clean: {
      dev: {
        src: ['build/']
      }
    },

    copy: {
      dev: {
        expand: true,
        cwd: 'app/',
        src: ['*.html', '*.css', 'views/*.html'],
        dest: 'build/',
        filter: 'isFile'
      }
    },

    browserify: {
      dev: {
        options: {
          transform: ['debowerify'],
          debug: true
        },
        src: ['app/js/**/*.js'],
        dest: 'build/bundle.js'
      },
      test: {
        options: {
          transform: ['debowerify'],
          debug: true
        },
        src: ['tests/angular/**/*.js'],
        dest: 'tests/testbundle.js'
      }
    },

    jshint: {
      files: ['app/js/**/*.js', 'test/**/*.js'],
      options: {
        jshintrc: true
      }
    },

    karma: {
      unit: {
        configFile: 'karma.config.js'
      }
    }
  });

  grunt.registerTask('build', ['clean:dev', 'jshint', 'browserify:dev', 'copy:dev']);
  grunt.registerTask('test', ['jshint', 'browserify:test', 'karma:unit']);  
};
