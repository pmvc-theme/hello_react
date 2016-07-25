import React, {Component} from 'react'; 
import {
    pageStore
} from 'pmvc_react_admin'; 

class Hello extends Component
{
    render()
    {
        let pageState = pageStore.getState();
        let text = pageState.get('text');
        let laze_text = pageState.get('laze_text');
        return (
            <div>
                <div>hello {text}</div>
                <div>{laze_text}</div>
            </div>
        );
    }
}

export default Hello;
