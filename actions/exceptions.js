var Reflux = require('reflux');
var RouteAction = require('./routes.js');

var actions = Reflux.createActions({
  serverError: {sync: true},
  clean: {sync: true},
  localError: {sync: true}
});

actions.serverError.preEmit = function(error) {
  if (error.status === 401) {
    RouteAction.navigateTo('/401');
  }
};

module.exports = actions;
