
define([

  // Libs
  'backbone',

  // Deps
  '../models/tab'

], function(Backbone, Tab) {

  var Tabs = Backbone.Collection.extend({
    model: Tab,
    url: '/js/data/tabs.json'
  });

  return Tabs;

});
