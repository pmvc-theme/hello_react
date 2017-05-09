import React from 'react'; 
import Hello from './hello';
import Reshow from 'reshow'; 

const themes = {
    hello: Hello,
};

const Index = (props) => 
<Reshow
    themes={themes}
    {...props}
/>

export default Index;
