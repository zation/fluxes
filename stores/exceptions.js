var Reflux = require('reflux');
var ExceptionActions = require('../actions/exceptions.js');

module.exports = Reflux.createStore({
  listenables: ExceptionActions,

  onClean: function() {
    this.trigger({});
  },

  onLocalError: function(payload) {
    this.trigger(payload);
  },

  onServerError: function(payload) {
    this.trigger(payload.responseJSON);
  }
});
