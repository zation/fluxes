var React = require('react');
var Reflux = require('reflux');
var _ = require('lodash');

var ConfirmationStore = require('../stores/confirmation');
var Modal = require('./modal.jsx');

module.exports = React.createClass({
  propTypes: {
    title: React.PropTypes.string
  },

  mixins: [Reflux.listenTo(ConfirmationStore, 'onAsk')],

  getInitialState: function() {
    return {
      message: ''
    };
  },

  onAsk: function(confirmation) {
    this.setState({
      message: confirmation.message
    });
    this._onCancelled = confirmation.onCancelled;
    this._onConfirmed = confirmation.onConfirmed;
    this.refs.modal.open();
  },

  onCancelled: function() {
    if (_.isFunction(this._onCancelled)) {
      this._onCancelled();
    }

    this.refs.modal.close();
  },

  onConfirmed: function() {
    if (_.isFunction(this._onConfirmed)) {
      this._onConfirmed();
    }

    this.refs.modal.close();
  },

  render: function() {
    return (
      <Modal ref="modal" title={this.props.title || 'Warning'}>
        <div className="modal-body">
          {this.state.message}
        </div>
        <div className="modal-footer">
          <button type="button" onClick={this.onConfirmed} className="btn btn-primary">OK</button>
          <button type="button" onClick={this.onCancelled} className="btn btn-default">Cancel</button>
        </div>
      </Modal>
    );
  }
});
