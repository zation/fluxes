var React = require('react');
var _ = require('lodash');
var classnames = require('classnames');

module.exports = React.createClass({
  propTypes: {
    className: React.PropTypes.string,
    type: React.PropTypes.oneOf(['round', 'flat']),
    equal: React.PropTypes.bool
  },

  render: function() {
    var id = 'a' + (new Date()).getTime().toString() + _.random(1000);

    return (
      <span className={this.props.className}>
        <input id={id} type="checkbox" className={classnames(
        'switcher',
        this.props.type === 'flat' ? 'switcher-flat' : 'switcher-round'
      )}/>
        <label htmlFor={id} className={classnames({equal: this.props.equal})}></label>
      </span>
    );
  }
});
