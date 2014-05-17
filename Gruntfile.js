var https = require('https');
var fs = require('fs');

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

    markdown: {
      all: {
        files: [ {
            src: 'project-readme.md', //Where do you want the readme saved
            dest: 'index.html'
          }
        ],
        options: {
          template: 'index.html.jst',
          preCompile: function(src, context) {
            // [Include project data from [github](https://api.github.com/repos/piascikj/imdone)](#doing:10)
            // [Add github description to title](#doing:20)
          },
          postCompile: function(src, context) {},
          templateContext: {
            title: "iMDone",
            project: "piascikj/imdone",
            ga: 'UA-37731114-1',
            history: 'History.md',
            social: {
              twitter: {
                referer:"http://piascikj.github.io/imdone/",
                text: "Check out iMDone!  A task board in your code",
                url:"http://piascikj.github.io/imdone/",
                username: "imdone_io"
              } 
            }
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
    grunt.config.requires('markdown.all.options.templateContext.project');
    var done = this.async();
    var readme = "project-readme.md";
    var project = grunt.config("markdown.all.options.templateContext.project");
    https.get({ host:"api.github.com",
                path: "/repos/" + project + "/readme",
                headers: {'User-Agent':'imdone-site'}
              }, function(res) {
      var data = '';

      res.on('data', function (chunk){
          data += chunk;
      });

      res.on('end',function(){
        var obj = JSON.parse(data);
        var md = new Buffer(obj.content, 'base64').toString('ascii');
        fs.writeFile(readme, md, function (err) {
          if (err) {
            done(err);
          }
          grunt.log.writeln('saved project README to ' + readme);

          var history = grunt.config('markdown.all.options.templateContext.history');
          if (history) {
            https.get({ host:"api.github.com",
                        path: "/repos/" + project + "/contents/" + history,
                        headers: {'User-Agent':'imdone-site'}
                      }, function(res) {
              var data = '';

              res.on('data', function (chunk){
                  data += chunk;
              });

              res.on('end',function(){
                  var obj = JSON.parse(data);
                  md = md + "\n" + new Buffer(obj.content, 'base64').toString('ascii');
                  fs.writeFile(readme, md, function (err) {
                    if (err) {
                      done(err);
                    }
                    grunt.log.writeln('saved project History to ' + readme);
                    done(true);
                  });
              });
            });
          } else done(true);
        });
      });
    });
  });

  grunt.registerTask('default', ['bower:install', 'readme', 'markdown']);

};
