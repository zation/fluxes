var React = require('react');
var _ = require('lodash');

module.exports = React.createClass({
  render: function() {
    var href = this.props.href;

    if (_.isUndefined(href)) {
      href = 'javascript:void(0)';
    } else if (this.props.target !== '_blank') {
      if (_.startsWith(href, '/')) {
        href = '#' + href;
      } else if (!_.startsWith(href, 'http')) {
        var hash = window.location.hash;
        if (!_.endsWith(hash, '/')) {
          hash += '/';
        }
        href = hash + href;
      }
    }

    return React.DOM.a(_.assign({}, this.props, {href: href}));
  }
});
