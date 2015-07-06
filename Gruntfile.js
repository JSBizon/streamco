module.exports = function(grunt) {

    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-mocha-test');

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        jshint: {
            options: {
              node: true,
              esnext: true,
            },
            main : ["lib/*.es6"]
        },
        mochaTest: {
            sqlite_test : {
                options: {
                    reporter: 'spec',
                    require: 'test/sqlite-globals',
                    clearRequireCache: true
                },

                src: ['test/*.test.js']
            },
        }
    });

    grunt.registerTask('default', ['jshint:main', 'mochaTest']);
};
