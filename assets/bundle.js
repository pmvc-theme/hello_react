webpackJsonp([0],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {var React=__webpack_require__(2);
	MyApp = React.createFactory(__webpack_require__(3));
	if (typeof window !== 'undefined' && typeof document !== 'undefined') {
	  window.app=React.render(MyApp(REACT_DATA), document.getElementById('app'));
	  window.React=React;
	}else{
	  global.app=MyApp;
	}

	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 1 */,
/* 2 */,
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	var React = __webpack_require__(2);


	module.exports = React.createClass({
	    displayName: 'ReactAtomicUIDoc',
	    statics: {
	    },
	    getDefaultProps: function(){
	        return {
	            title: "Atomic Design"
	        };
	    },
	    getInitialState: function () {
	        return {
	            view: this.props.view
	        };
	    },
	    render: function(){
	        var pages = [
	            {
	                name: 'atoms',
	                url: '/react/index.html/atoms',
	                text: 'Atoms'
	            },
	            {
	                name: 'molecules',
	                url: '/react/index.html/molecules',
	                text: 'Molecules'
	            },
	            {
	                name: 'organisms',
	                url: '/react/index.html/organisms',
	                text: 'Organisms'
	            }
	        ];
	        var views = {
	        };
	        var self=this;
	        var context = {
	            executeAction: function(obj,nav){
	              var url = nav.url;
	              var route = {
	                    url:url,
	                    navigate:{type:nav.type}
	              };
	              var params = url.split("/");
	              var last=params.length-1;
	    
	              self.setState({
	                view: params[last], 
	                route: route
	              });
	            }
	        };
	        var state = this.state;

	        return (
	            React.createElement("div", null, 
	                React.createElement("div", null, "hello ", this.props.text), 
	                React.createElement("div", null, this.props.laze_text)
	            )
	        );  
	  }
	});


/***/ }
]);