var React = require('react');

var Router = require('../libs/router');
var Link = require('./link.jsx');

module.exports = React.createClass({
  propTypes: {
    className: React.PropTypes.string
  },

  back: function() {
    Router.back();
  },

  render: function() {
    return (
      <Link className={this.props.className || 'btn btn-default'} onClick={this.back}>
        {this.props.children || 'Back'}
      </Link>
    );
  }
});
