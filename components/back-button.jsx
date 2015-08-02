var React = require('react');
var Reflux = require('reflux');
var _ = require('lodash');

var RoutesStore = require('../stores/routes');
var RoutesAction = require('../actions/routes');
var Link = require('./link.jsx');

module.exports = React.createClass({
  propTypes: {
    className: React.PropTypes.string
  },

  mixins: [Reflux.connect(RoutesStore, 'routes')],

  back: function() {
    RoutesAction.back();
  },

  render: function() {
    return (
      <Link className={this.props.className || 'btn btn-default'} onClick={this.back}>
        {this.props.children || 'Back'}
      </Link>
    );
  }
});
