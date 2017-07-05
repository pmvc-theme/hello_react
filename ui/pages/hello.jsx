import React, {Component} from 'react'; 
import {
    reshow,
    ReshowComponent
} from 'reshow'; 

class Hello extends ReshowComponent
{
    render()
    {
        const {data} = this.state;
        return (
            <div>
                <div>hello {data.text}</div>
                <div>{data.laze_text}</div>
            </div>
        );
    }
}

export default reshow(Hello);
