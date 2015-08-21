var _ = require('lodash');
var Router = require('director').Router;

var RoutesAction = require('../actions/routes');
var RoutesStore = require('../stores/routes');

var router;

module.exports = {
  back: function() {
    var stacks = RoutesStore.getStacks();
    if (stacks.length > 1) {
      router.setRoute(stacks[stacks.length - 2]);
    }
  },

  navigateTo: function(path) {
    router.setRoute(path);
  },

  create: function(routes, options) {
    var originalOn = options && options.on;
    var on = [function() {
      RoutesAction.navigateTo(router.getRoute().join('/'));
    }];
    if (_.isFunction(originalOn)) {
      on.push(originalOn);
    } else if (_.isArray(originalOn)) {
      on = on.concat(originalOn);
    }
    router = new Router(routes).configure(_.merge({}, options, {on: on}));
    router.init('/');
    return router;
  }
};
