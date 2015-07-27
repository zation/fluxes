var _ = require('lodash');
var Router = require('director').Router;

var RouteStore = require('../stores/routes.js');

var router;

module.exports = {
  create: function(routes, options) {
    router = new Router(routes).configure(options);
    router.init();
    if (window.location.hash === '') {
      router.setRoute('/');
    }

    RouteStore.listen(function(stacks) {
      var currentRoute = _.last(stacks);
      router.setRoute(currentRoute);
      window.scrollTo(0, 0);
    });

    return router;
  }
};
