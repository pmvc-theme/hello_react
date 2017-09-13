<?php

$paths=[
    'index' => __DIR__.'/../index.html',
    'laze'  => __DIR__.'/../laze.html',
    'header'=> __DIR__.'/../header.html',
];

${_INIT_CONFIG}=[
    'paths'=>$paths,
    'assetsRoot'=>'assets/',
    'webpackVendor'=>[]
];

if ('cli'===getenv("DUMP")){
    echo json_encode(${_INIT_CONFIG});
}
