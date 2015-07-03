var React=require('react');
    MyApp = React.createFactory(require('./pages/index.jsx'));
    if (typeof window !== 'undefined' && typeof document !== 'undefined') {
      window.app=React.render(MyApp(), document.body);
      window.React=React;
    }else{
      global.app=MyApp;
    }
