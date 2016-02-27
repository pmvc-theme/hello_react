
//process.argv.forEach(function (val, index, arr) {
//  console.log(index + ': ' + val,arr);
//});

var ReactServer = require('react-dom/server');
var args = process.argv.slice(2);
var myJson = JSON.parse(args.join(''));
var file = './assets/node.bundle.js'; 
require(file);
var MyApp = global.app;
var tmp = ReactServer.renderToString(MyApp(
    myJson 
));
console.log('<!--start-->'+tmp);
