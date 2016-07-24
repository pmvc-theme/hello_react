import React, {Component} from 'react'; 
import Home from './home';
import PMVCReactAdmin from 'pmvc_react_admin'; 

class Index extends Component
{

   render(){
        let themes = {
            home: <Home />,
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
