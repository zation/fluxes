var Reflux = require('reflux');
var ConfirmationAction = require('../actions/confirmation');

module.exports = Reflux.createStore({
  listenables: ConfirmationAction,

  onAsk: function(payload) {
    this.trigger(payload);
  }
});
