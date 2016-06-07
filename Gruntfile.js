module.exports = function(grunt) {
    grunt.initConfig({
        less: {
            development: {
                options: {
                    paths: ["./src/less"],
                    yuicompress: true
                },
                files: {
                    "./build/assets/styles/main.css": "./src/less/main.less"
                }
            }
        },
        watch: {
            files: "./src/less/*",
            tasks: ["less"]
        }
    });
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-watch');
};
