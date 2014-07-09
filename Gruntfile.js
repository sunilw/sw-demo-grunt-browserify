module.exports = function (grunt){
    grunt.initConfig({

        compass : {
            dev : {
                options : {
                    cssDir : 'css',
                    sassDir : 'sass',
                    debugInfo : true
                }
            }
        },  // ends compass task definitions
	
	php :{	    
	    dev : { 
		options : {
		    keepalive : true,
		    port: 9000
		}
	    }	    
	},    	

	watch : {
            files : ['*.html',  '*.php',  'js/*', 'sass/*', 'css/*'],
            tasks : ['browserify', 'compass'],
            options : {
                livereload: true
            }
        },  // ends watch task definition

	browserify : {
	    options  :  {		
	    },
	    dev  :  {
		files : {
		    'js/bundle.js': ['js/app.js'],
		}
	    }
	},
	
	concurrent : {	    
	    target1 :   [ 'php', 'watch'],
	    options : {
		logConcurrentOutput : true
	    }
	} // ends concurrent
	

    });  // end task defintions

    grunt.loadNpmTasks('grunt-php');
    grunt.loadNpmTasks('grunt-concurrent');
    grunt.loadNpmTasks('grunt-contrib-watch');    
    grunt.loadNpmTasks('grunt-contrib-compass');
    grunt.loadNpmTasks('grunt-browserify');   
    grunt.registerTask( 'default' , ['concurrent:target1', 'concurrent:target2'] ) ;

} ;
