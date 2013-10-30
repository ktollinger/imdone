require.config({
  baseUrl: "lib",
  paths: {
    "bootstrap"  : "bootstrap/js/bootstrap.min",
    "jquery"     : ["http://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min",
                    "jquery/jquery"],
    "underscore" : "underscore/js/underscore-min",
    "backbone"   : "backbone/js/backbone-min",
    "marked"     : "marked/js/marked",
    "prism"      : "prismjs/js/prism",
    "app"        : "../js/app"
  },
  shim: {
    "bootstrap" : ["jquery"],
    "backbone"  : {
                    deps    : ["jquery", "underscore"],
                    exports : "Backbone"
                  }
  },
  waitSeconds: 10
});

require(['jquery', 'underscore', 'backbone', 'bootstrap', 'app', 'prism'], function(jquery, _, Backbone, Bootstrap, App){
    Prism.highlightAll();
    new App;
});