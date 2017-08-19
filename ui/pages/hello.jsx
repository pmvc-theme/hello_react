import React, {Component} from 'react'; 
import get from 'get-object-value';
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
                <div>hello {get(data,['text'])}</div>
                <div>{get(data, ['laze_text'])}</div>
            </div>
        );
    }
}

export default reshow(Hello);
