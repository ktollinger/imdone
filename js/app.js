define(["backbone", "jquery"], function(Backbone, $){
    var App = Backbone.View.extend({
        initialize: function(){
          this.render();
        },

        render: function(){
          $("#toc").toc({
            'highlightOffset': "100px", //offset to trigger the next headline
          });
          $('body').scrollspy({ target: '.sidebar'});
        }
    });
    return App;
});