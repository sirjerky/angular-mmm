"use strict";

module.exports = function(grunt){
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-browserify');
  grunt.loadNpmTasks('grunt-contrib-jshint');

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
        src: ['test/mocha/**/*.js'],
        dest: ['test/testbundle.js']
      }
    },

    jshint: {
      files: ['app/js/**/*.js'],
      options: {
        jshintrc: true
      }
    }
  });

  grunt.registerTask('build', ['clean:dev', 'jshint', 'browserify:dev', 'copy:dev'])  
};
