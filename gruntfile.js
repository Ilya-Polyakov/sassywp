module.exports = function(grunt){

  grunt.initConfig({

    pkg: grunt.file.readJSON('package.json'),

    /**
    * Sass task
    */
    sass: {
      dev: {
        options: {
          style: 'expanded',
          sourcemap: 'none',
        }, // options
        files: {
          'compiled/style-human.css': 'sass/style.scss'
        } // files
      }, // dev
      dist: {
        options: {
          style: 'compressed',
          sourcemap: 'none',
        }, // options
        files: {
          'compiled/style.css': 'sass/style.scss'
        } // files
      } // dist
    }, // Sass task

    /**
    * autoprefixer task
    */
    autoprefixer:{
      options: {
        browsers: ['last 2 versions']
      }, // options
      //prefix all files
      multiple_files: {
        expand: true,
        flatten: true,
        src: 'compiled/*.css',
        dest: ''
      } // multiple files
    }, // autoprefixer

    /**
    * Uglify task
    */
    uglify: {
        my_target: {
            files: {
                'script.js' : ['js/*.js']
            } // files
        } // my target
    }, // uglify

    /**
    *Watch task
    */
    watch: {
      css: {
        files: '**/*.scss',
        tasks: ['sass','autoprefixer']
      } // css
    } // watch

  }); // grunt.initConfig

  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-autoprefixer');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.registerTask('default',['watch']);

} // module.exports
