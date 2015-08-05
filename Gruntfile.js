module.exports = function(grunt){

  grunt.initConfig({

    pkg: grunt.file.readJSON('package.json'),

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

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.registerTask('default',['watch']);

} // module.exports
