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
        src: 'project-readme.md', //Where do you want the readme saved
        dest: 'index.html',
        options: {
          template: 'index.html.jst',
          preCompile: function(src, context) {
            if (context.hero) {
              var fs = require('fs');
              context.hero = fs.readFileSync(context.hero, 'utf8');
            } else {
              context.hero="";
            }
            // [Include project data from [github](https://api.github.com/repos/piascikj/imdone)](#doing:0)
            // [Add github description to title](#doing:0)
            // [Include project data from [npm](http://isaacs.iriscouch.com/registry/_design/app)](#doing:0)
            // [NPM project data <http://registry.npmjs.org/imdone>](#doing:0)
          },
          postCompile: function(src, context) {},
          templateContext: {
            title: "iMDone",
            hero: "hero.html",
            project: "piascikj/imdone",
            ga: 'UA-37731114-1'
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
    grunt.config.requires('markdown.all.src');
    var done = this.async();
    var https = require('https');
    var fs = require('fs');
    var readme = grunt.config('markdown.all.src');
    https.get("https://api.github.com/repos/" + 
              grunt.config("markdown.all.options.templateContext.project") + 
              "/readme", function(res) {
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
            done(true);
          });
      });
    });
  });

  grunt.registerTask('default', ['bower:install', 'readme', 'markdown']);

};
