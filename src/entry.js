const React=require('react');
const MyApp = React.createFactory(require('./pages/index.jsx'));
if (typeof window !== 'undefined' && typeof document !== 'undefined') {
  const ReactDOM = require('react-dom');
  window.app=MyApp;
  ReactDOM.render(new MyApp(REACT_DATA), document.getElementById('app'));
  window.ReactDOM=ReactDOM;
}else{
  global.app=MyApp;
}
