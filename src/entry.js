var React=require('react');
MyApp = React.createFactory(require('./pages/index.jsx'));
if (typeof window !== 'undefined' && typeof document !== 'undefined') {
  window.app=React.render(MyApp(REACT_DATA), document.getElementById('app'));
  window.React=React;
}else{
  global.app=MyApp;
  global.React=React;
}
