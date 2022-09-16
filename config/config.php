<?php
if (!defined('_INIT_CONFIG')) {
  define('_INIT_CONFIG', '_init_config');
}

$paths=[
    'index' => __DIR__.'/../index.html',
    'laze'  => __DIR__.'/../laze.html',
];

${_INIT_CONFIG}=[
    'paths'=>$paths,
    'assetsRoot'=>'assets/',
    'webpackVendor'=>[]
];

if ('cli'===getenv("DUMP")){
    echo json_encode(${_INIT_CONFIG});
}

${_INIT_CONFIG}=[
    'backend' => [
      'paths'=>&$paths,
    ],
    'view' => [
      'serviceWorkerURL'=>'/service-worker.js',
    ],
    'compile' => [
//    'swDebug' => true, 
      'assetsRoot'=>'assets/',
    ]
];

if ('cli'===getenv("DUMP")){
    echo json_encode(${_INIT_CONFIG}['compile']);
}

