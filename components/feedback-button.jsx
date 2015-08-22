var React = require('react');
var Ladda = require('ladda');
var classnames = require('classnames');

module.exports = React.createClass({
  propTypes: {
    type: React.PropTypes.oneOf(['button', 'reset', 'submit']),
    animation: React.PropTypes.oneOf([
      'expand-left', 'expand-right', 'expand-up', 'expand-down',
      'contract', 'contract-overlay', 'zoom-in', 'zoom-out',
      'slide-left', 'slide-right', 'slide-up', 'slide-down'
    ]),
    onClick: React.PropTypes.func.isRequired,
    className: React.PropTypes.string
  },

  componentDidMount: function() {
    this._ladda = Ladda.create(this.getDOMNode());
    this.originalClick = this.props.onClick;
  },

  componentDidUpdate: function() {
    this.originalClick = this.props.onClick;
  },

  disable: function() {
    this._ladda.start();
  },

  enable: function() {
    this._ladda.stop();
  },

  onClick: function() {
    if (this.originalClick) {
      var promise = this.originalClick();
      if (promise) {
        this.disable();
        if (promise['catch']) {
          promise.then(this.enable)['catch'](this.enable);
        } else {
          promise.then(this.enable, this.enable);
        }
      }
    }
  },

  render: function() {
    return (
      <button type={this.props.type || 'button'}
              data-style={this.props.animation || 'expand-right'}
              onClick={this.onClick}
              className={classnames('ladda-button', this.props.className)}>
        {this.props.children}
      </button>
    );
  }
});
