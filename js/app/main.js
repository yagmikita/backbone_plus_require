define([
  'jquery',
  'backbone',
  './controller'
], function($, Backbone, Controller) {
    var controller = new Controller();
    Backbone.emulateHTTP = true;
    Backbone.emulateJSON = true;
    Backbone.history.start();
});