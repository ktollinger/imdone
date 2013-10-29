define(["backbone", "jquery"], function(Backbone, $){
    var App = Backbone.View.extend({
        initialize: function(){
          this.render();
        },

        render: function(){
          $.getJSON("https://api.github.com/repos/piascikj/imdone/readme", function(data) {
            console.log("HAHA");
            //console.log("base64:" + data.content);
            var markdown = atob(data.content.replace(/\s/g, ''));
            console.log("text:" + markdown);
          });
        }
    });
    return App;
});