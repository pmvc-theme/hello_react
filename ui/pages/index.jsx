import React, {Component} from 'react'; 
import Hello from './hello';
import PMVCReactAdmin from 'pmvc_react_admin'; 

class Index extends Component
{

   render(){
        let themes = {
            hello: <Hello />,
        };
        return (
            <PMVCReactAdmin 
                themes={themes}
                {...this.props}
            />
        );  
    }
}

export default Index;
