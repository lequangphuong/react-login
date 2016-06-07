var React = require('react');
var ReactDOM = require('react-dom');

var LoginPage = require('./components/LoginPage');

var HomePage = React.createClass({
  render: function() {
    return (
      <div />
    );
  }
})

ReactDOM.render((
  <LoginPage />
), document.getElementById('content'))
