//the require library is configuring paths
require.config({
    paths: {
                //tries to load jQuery from Google's CDN first and falls back
                //to load locally
        "bootstrap": "libs/bootstrap/dist/js/bootstrap",
        "jquery": ["http://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min",
                    "libs/jquery/jquery"],
        "underscore": "libs/underscore/underscore-min",
        "backbone": "libs/backbone/backbone-min"
    },
    shim: {
        // Bootstrap
        "bootstrap": ["jquery"],
        "backbone": {
                        //loads dependencies first
            deps: ["jquery", "underscore"],
                        //custom export name, this would be lowercase otherwise
            exports: "Backbone"
        }
    },
        //how long the it tries to load a script before giving up, the default is 7
    waitSeconds: 10
});
//requiring the scripts in the first argument and then passing the library namespaces into a callback
//you should be able to console log all of the callback arguments
require(['jquery', 'underscore', 'backbone', 'bootstrap', 'app'], function(jquery, _, Backbone, Bootstrap, App){
    new App;
});