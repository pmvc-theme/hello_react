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

case "$1" in
  p)
    production
    ;;
  *)
    develop
    exit
esac

exit $?
