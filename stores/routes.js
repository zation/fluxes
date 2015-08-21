var Reflux = require('reflux');
var RouteActions = require('../actions/routes');
var _ = require('lodash');

var stacks = [];

module.exports = Reflux.createStore({
  listenables: RouteActions,

  onNavigateTo: function(newRoute) {
    stacks.push(newRoute);
    this.trigger(stacks);
  },

  getStacks: function() {
    return _.cloneDeep(stacks);
  },

  getInitialState: function() {
    return stacks;
  }
});
