var React = require('react');
    // This is our React component, shared by server and browser thanks to browserify

process.argv.forEach(function (val, index, arr) {
  console.log(index + ': ' + val,arr);
});
    window={
        XMLHttpRequest:false
    };
    var file ='./assets/node.bundle.js'; 
    require(file);
   var MyApp=global.app;
   var tmp = React.renderToString(MyApp(
       {view:'molecules'}
   ));
   console.log(tmp);
