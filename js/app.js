define(["backbone", "jquery"], function(Backbone, $){
    var App = Backbone.View.extend({
        initialize: function(){
          this.render();
        },

        render: function(){
          $("#toc").toc();
          $('body').scrollspy({ target: '.sidebar', offset: 40 });
        }
    });
    return App;
});