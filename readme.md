Using bootstrap with marked for github project page 
----
### Install bower
```npm install -g bower```

### Add a `.bowerrc` file
```javascript
{
    "directory": "js/libs"
}
```

### Add a `bower.json` file
```javascript
{
    "name": "RequireJS Starter",
    "version": "1.0.0",
    "dependencies": {
        "bootstrap": null,
        "backbone": null,
        "underscore": null,
        "requirejs": null
    }
}
```

### Install the libs `bower install`
### Create a `main.js` file in the `js` directory
```javascript
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
```

### Create an `app.js` file in js directory
```javascript
define(["backbone"], function(Backbone){
    var App = Backbone.View.extend({
        initialize: function(){
            console.log("it's working!");
        }
    });
    return App;
});
```

### Create an index.html file
```html
<!DOCTYPE html>
<html>
  <head>
    <title>Bootstrap 101 Template</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!-- Bootstrap -->
    <link href="/js/libs/bootstrap/dist/css/bootstrap.min.css" rel="stylesheet" media="screen">
  </head>
  <body>
    <h1>Hello, world!</h1>

    <script data-main="js/main" src="js/libs/requirejs/require.js"></script>
  </body>
</html>
```

References
----
- [Setting up a Require.js and Backbone.js project quickly with Bower](http://imstillreallybored.com/2013/08/setting-up-a-require-js-and-backbone-js-project-quickly-with-bower/)
- [Starter Template for Bootstrap](http://getbootstrap.com/examples/starter-template/)
- [Flatdoc](http://ricostacruz.com/flatdoc/)