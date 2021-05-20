module.exports=function(grunt){
    grunt.initConfig({
        sass:{
            dist:{
                files[{
                    expand:true,
                    cwd:'css',
                    src['*.scss'],
                    dest:'css',
                    ext:'.css'
                }]
            }
        },
        watch:{
           files:['css/*.scss'],
           task:['css']
        }
    });

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.registerTask('css', ['sass']);
};