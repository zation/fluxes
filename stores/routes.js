var Reflux = require('reflux');
var RouteActions = require('../actions/routes.js');
var _ = require('lodash');

var stacks = [];

module.exports = Reflux.createStore({
  listenables: RouteActions,

  onBack: function() {
    if (stacks.length > 0) {
      var previousRoute = stacks.pop();
      this.trigger(stacks, previousRoute);
    }
  },

  onNavigateTo: function(newRoute) {
    var previousRoute = _.last(stacks);
    stacks.push(newRoute);
    this.trigger(stacks, previousRoute);
  },

  getInitialState: function() {
    return stacks;
  }
});
