var React = require('react');

//process.argv.forEach(function (val, index, arr) {
//  console.log(index + ': ' + val,arr);
//});

    var myJson = JSON.parse(process.argv[2]);
    window={
        XMLHttpRequest:false
    };
    var file ='./assets/node.bundle.js'; 
    require(file);
   var MyApp=global.app;
   var tmp = React.renderToString(MyApp(
      myJson 
   ));
   console.log(tmp);
