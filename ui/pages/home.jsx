import React, {Component} from 'react'; 

const Home = (props)=>(
    <div>
        <div>hello {props.text}</div>
        <div>{props.laze_text}</div>
    </div>
);

export default Home;
