import React, {Component} from 'react'; 
import Hello from './hello';
import Reshow from 'reshow'; 

class Index extends Component
{

   render(){
        let themes = {
            hello: <Hello />,
        };
        return (
            <Reshow
                themes={themes}
                {...this.props}
            />
        );  
    }
}

export default Index;
