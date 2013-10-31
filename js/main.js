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
    "jquery.toc" : "jquery.toc/jquery.toc",
    "app"        : "../js/app"
  },
  shim: {
    "bootstrap" : ["jquery"],
    "backbone"  : {
                    deps    : ["jquery", "underscore"],
                    exports : "Backbone"
                  },
    "jquery.toc" : ["jquery"]
  },
  waitSeconds: 10
});

require(['jquery', 'underscore', 'backbone', 'bootstrap', 'app', 'prism', 'jquery.toc'], function(jquery, _, Backbone, Bootstrap, App){
    Prism.highlightAll();
    new App;
});