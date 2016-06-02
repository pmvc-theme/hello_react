webpackJsonp([0],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {'use strict';

	var React = __webpack_require__(1);
	var MyApp = React.createFactory(__webpack_require__(38));
	if (typeof window !== 'undefined' && typeof document !== 'undefined') {
	  var ReactDOM = __webpack_require__(39);
	  window.app = MyApp;
	  ReactDOM.render(new MyApp(REACT_DATA), document.getElementById('app'));
	  window.ReactDOM = ReactDOM;
	} else {
	  global.app = MyApp;
	}
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },

/***/ 38:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var React = __webpack_require__(1);

	module.exports = React.createClass({
	    displayName: 'ReactPMVC',
	    statics: {},
	    getDefaultProps: function getDefaultProps() {
	        return {};
	    },
	    getInitialState: function getInitialState() {
	        return {
	            path: this.props.path
	        };
	    },
	    render: function render() {
	        var pages = [{
	            name: 'atoms',
	            url: '/react/index.html/atoms',
	            text: 'Atoms'
	        }, {
	            name: 'molecules',
	            url: '/react/index.html/molecules',
	            text: 'Molecules'
	        }, {
	            name: 'organisms',
	            url: '/react/index.html/organisms',
	            text: 'Organisms'
	        }];
	        var views = {};
	        var self = this;
	        var context = {
	            executeAction: function executeAction(obj, nav) {
	                var url = nav.url;
	                var route = {
	                    url: url,
	                    navigate: { type: nav.type }
	                };
	                var params = url.split("/");
	                var last = params.length - 1;

	                self.setState({
	                    view: params[last],
	                    route: route
	                });
	            }
	        };
	        var state = this.state;

	        return React.createElement(
	            'div',
	            null,
	            React.createElement(
	                'div',
	                null,
	                'hello ',
	                this.props.text
	            ),
	            React.createElement(
	                'div',
	                null,
	                this.props.laze_text
	            )
	        );
	    }
	});

/***/ }

});