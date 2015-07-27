var Reflux = require('reflux');

var PageActions = require('../actions/pages.js');

var page = {};

module.exports = Reflux.createStore({
  listenables: PageActions,

  onRender: function(component, props) {
    page.component = component;
    page.props = props;
    this.trigger(page);
  },

  getInitialState: function() {
    return page;
  }
});
