#!/bin/sh

CHK_PHP=$(which php 2>/dev/null)

if [ ! -z "$CHK_PHP" ]; then
  conf=`DUMP=cli php -r "include('config/config.php');"`
else
  conf='{'
  conf+='"assetsRoot":"./assets/",'
  conf+='"devPort": "'${hotPort:-8080}'"'
  conf+='}'
fi

echo $conf;
webpack='npm run webpack --'

production(){
    echo "Production Mode";
    npm run build
    NODE_ENV=production CONFIG=$conf $webpack 
    NODE_ENV=production CONFIG=$conf $webpack --config webpack.server.js
}

develop(){
    echo "Develop Mode";
    npm run build
    CONFIG=$conf $webpack
    CONFIG=$conf $webpack --config webpack.server.js
}

analyzer(){
    echo "Analyzer Mode";
    npm run build
    CONFIG=$conf BUNDLE='{}' $webpack
}

startServer(){
    yarn
    if [ -z "$port" ] ; then
        port=3000;
    fi
    echo "Start server";
    npm run start -- -p $port -v
}

nodeTest(){
    echo '{"themePath":"hello"}' | node ./server.js
    echo ""
}

killBy(){
    ps -eo pid,args | grep $1 | grep -v grep | awk '{print $1}' | xargs -I{} kill -9 {}
}

stop(){
    DIR="$( cd "$(dirname "$0")" ; pwd -P )"
    killBy ${DIR}/node_modules/.bin/babel 
    cat webpack.pid | xargs -I{} kill -9 {}
    npm run clean
}

hot(){
    echo "Hot Mode";
    npm run build:ui -- --watch &
    npm run build:src -- --watch &
    HOT_UPDATE=1 CONFIG=$conf $webpack serve &
}

case "$1" in
  node)
    nodeTest
    ;;
  a)
    analyzer 
    ;;
  s)
    startServer 
    ;;
  p)
    stop 
    production
    ;;
  hot)
    stop 
    hot
    ;;
  stop)
    stop 
    ;;
  *)
    stop 
    develop
    exit
esac

exit $?
