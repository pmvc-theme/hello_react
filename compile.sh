#!/bin/sh

phpc=`DUMP=cli php -r "include('config/config.php');"`

production(){
    echo "Production Mode";
    npm run build
    NODE_ENV=production CONFIG=$phpc webpack -p --optimize-minimize 
    NODE_ENV=production webpack -p --config webpack.server.js --optimize-minimize
}

develop(){
    echo "Develop Mode";
    npm run build
    CONFIG=$phpc webpack
    webpack --config webpack.server.js
}

analyzer(){
    echo "Analyzer Mode";
    npm run build
    CONFIG=$conf BUNDLE='{}' webpack
}

startServer(){
    yarn
    if [ -z "$port" ] ; then
        port=3000;
    fi
    echo "Start server";
    node_modules/.bin/ws -p $port -v 
}

nodeTest(){
    echo '{"themePath":"hello"}' | node ./server.js
    echo ""
}

case "$1" in
  node)
    nodeTest
    ;;
  p)
    production
    ;;
  a)
    analyzer 
    ;;
  s)
    startServer 
    ;;
  *)
    develop
    exit
esac

exit $?
