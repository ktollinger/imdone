define(["backbone", "jquery"], function(Backbone, $){
    var App = Backbone.View.extend({
        initialize: function(){
          this.render();
        },

        render: function(){
          $("#toc").toc({headings: "h1,h2"});
          $('body').scrollspy({ target: '.sidebar'});
        }
    });
    return App;
});