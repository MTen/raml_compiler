/*global module:false*/
module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    // Task configuration.
    exec: {
      mocha:{
        command: "mocha test/tests/ --reporter dot"
      }
    },
    watch: {
      gruntfile: {
        files: "Gruntfile.js",
        options:{
          reload: true
        },
        tasks: ['exec:mocha']
      },
      config: {
        files: "test/mocha.opts",
        tasks: ["exec:mocha"]
      },
      tests: {
        files: "test/tests/*.js",
        tasks: ['exec:mocha']
      },
      src: {
        files: ["src/*.js", "app.js"],
        tasks: ['exec:mocha']
      }

    }
  });

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-exec');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Default task.
  grunt.registerTask('default', [ 'watch']);

};
