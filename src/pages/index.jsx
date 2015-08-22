var React = require('react');

module.exports = React.createClass({
    displayName: 'ReactPMVC',
    statics: {
    },
    getDefaultProps: function(){
        return {
        };
    },
    getInitialState: function () {
        return {
            path: this.props.path
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
            <div>
                <div>hello {this.props.text}</div>
                <div>{this.props.laze_text}</div>
            </div>
        );  
  }
});
