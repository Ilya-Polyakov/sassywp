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
          'style-human.css': 'sass/style.scss'
        } // files
      }, // dev
      dist: {
        options: {
          style: 'compressed',
          sourcemap: 'none',
        }, // options
        files: {
          'style.css': 'sass/style.scss'
        } // files
      } // dist
    }, // Sass task

    /**
    *Watch task
    */
    watch: {
      css: {
        files: '**/*.scss',
        tasks: ['sass']
      } // css
    } // watch

  }); // grunt.initConfig

  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.registerTask('default',['watch']);

} // module.exports
