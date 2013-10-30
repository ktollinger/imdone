module.exports = function(grunt) {
  
  grunt.initConfig({
    bower: {
      install: {
        options: {
          targetDir: './lib',
          layout: 'byComponent',
          install: true,
          verbose: true,
          cleanTargetDir: true,
          cleanBowerDir: false
        }
      }
    },

    readme: {
      project: "piascikj/imdone"
    },

    markdown: {
      all: {
        src: 'readme.md',
        dest: 'index.html',
        options: {
          template: 'index.html.jst',
          preCompile: function(src, context) {},
          postCompile: function(src, context) {},
          templateContext: {
            title: "iMDone",
            description: ""
          },
          markdownOptions: {
            gfm: true
          }
        }
      }
    }

  });

  grunt.loadNpmTasks('grunt-bower-task');
  grunt.loadNpmTasks('grunt-markdown');

  grunt.registerTask('readme', 'Get readme file', function() {
    grunt.config.requires('readme.project');
    var done = this.async();
    var https = require('https');
    var fs = require('fs');
    var marked = 
    https.get("https://api.github.com/repos/" + grunt.config("readme.project") + "/readme", function(res) {
      var data = '';

      res.on('data', function (chunk){
          data += chunk;
      });

      res.on('end',function(){
          var obj = JSON.parse(data);
          var md = new Buffer(obj.content, 'base64').toString('ascii')
          fs.writeFile('readme.md', md, function (err) {
            if (err) {
              done(err);
            }
            grunt.log.writeln('saved readme.md');
            done(true);
          });
      });
    });
  });

  grunt.registerTask('default', ['bower:install', 'readme', 'markdown']);

};
