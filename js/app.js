define(["backbone", "jquery"], function(Backbone, $){
    var App = Backbone.View.extend({
        initialize: function(){
          this.render();
        },

        render: function(){
          //$("#toc").toc({content:".readme"});
        }
    });
    return App;
});