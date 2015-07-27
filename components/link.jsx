var React = require('react');
var _ = require('lodash');

var RouteAction = require('../actions/routes');

module.exports = React.createClass({
  onClick: function() {
    var href = this.props.href;
    if (!_.isUndefined(href)) {
      RouteAction.navigateTo(href);
    }

    if (!_.isUndefined(this.originalClick)) {
      this.originalClick();
    }
  },

  render: function() {
    var option;
    if (this.props.target !== '_blank' && !_.startsWith(this.props.href, 'http')) {
      this.originalClick = this.props.onClick;
      option = {
        href: 'javascript:void(0)',
        'data-href': this.props.href,
        onClick: this.onClick
      };
    }

    return React.DOM.a(_.assign({}, this.props, option));
  }
});
