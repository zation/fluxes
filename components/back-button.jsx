var React = require('react');
var Reflux = require('reflux');

var Router = require('../libs/router');
var RoutesStore = require('../stores/routes');
var Link = require('./link.jsx');

module.exports = React.createClass({
  propTypes: {
    className: React.PropTypes.string
  },

  mixins: [Reflux.connect(RoutesStore, 'routes')],

  back: function() {
    Router.back();
  },

  render: function() {
    if (this.state.routes.length < 2) {
      return null;
    }

    return (
      <Link className={this.props.className || 'btn btn-default'} onClick={this.back}>
        {this.props.children || 'Back'}
      </Link>
    );
  }
});
