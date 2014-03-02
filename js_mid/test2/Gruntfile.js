module.exports = function(grunt){

	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-sass');

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

		watch: {
		    css: {
		        files: ['scss/*.scss'],
		        tasks: ['buildcss']
		    },

		    js: {
		        files: ['js/setup.js','js/models/Tweet.js','js/collections/Tweets.js','js/views/Tweet.js','js/views/Tweets.js','js/init.js'],
		        tasks: ['uglify']
		    }
		},

		uglify: {
		    build: {
		        files: {
		            'js/site.js': ['js/setup.js','js/models/Tweet.js','js/collections/Tweets.js','js/views/Tweet.js','js/views/Tweets.js','js/init.js']
		        }
		    }
		},

		cssmin: {
		    build: {
		        src: 'css/site.css',
		        dest: 'css/site.css'
		    }
		},

		sass: {
		    build: {
		        files: {
		            'css/site.css': 'scss/site.scss'
		        }
		    }
		}

    });

    grunt.registerTask('default', []);
    grunt.registerTask('buildcss',  ['sass', 'cssmin']);

};