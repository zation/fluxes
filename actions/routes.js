var Reflux = require('reflux');

var actions = Reflux.createActions({
  navigateTo: {sync: true},
  back: {sync: true}
});

module.exports = actions;
