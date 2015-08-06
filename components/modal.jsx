var React = require('react');
var $ = global.jQuery;
var classnames = require('classnames');

require('bootstrap-styl/js/modal');

module.exports = React.createClass({
  propTypes: {
    className: React.PropTypes.string,
    size: React.PropTypes.oneOf(['small', 'large']),
    title: React.PropTypes.string,
    onClose: React.PropTypes.func,
    onOpen: React.PropTypes.func
  },

  componentDidMount: function() {
    $(this.getDOMNode()).on('hidden.bs.modal', this.props.onClose);
    $(this.getDOMNode()).on('show.bs.modal', this.props.onOpen);
  },

  componentWillUnmount: function() {
    $(this.getDOMNode()).off('hidden.bs.modal');
    $(this.getDOMNode()).off('show.bs.modal');
  },

  open: function() {
    $(this.getDOMNode()).modal('show');
  },

  close: function() {
    $(this.getDOMNode()).modal('hide');
  },

  render: function() {
    var size = this.props.size;
    return (
      <div className={'modal fade ' + (this.props.className || '')}>
        <div className={classnames('modal-dialog', {
          'modal-lg': size === 'large',
          'modal-sm': size === 'sm'
        })}>
          <div className="modal-content">
            <div className="modal-header">
              <button type="button" className="close" data-dismiss="modal">
                <span aria-hidden="true">&times;</span>
                <span className="sr-only">Close</span>
              </button>
              <h4 className="modal-title">{this.props.title || '\u00a0'}</h4>
            </div>
            {this.props.children}
          </div>
        </div>
      </div>
    );
  }
});
