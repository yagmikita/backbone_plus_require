
define([

  // Libs
  'backbone',

  // Deps
  './item'

], function(Backbone, TabView) {

  var View = Backbone.View.extend({

    //$el: $('#tabs'),

    id: "tabs",
    tagName: "div",
    views: "",

    initialize: function() {
      _.bindAll(this);
      this.collection.on('reset', this.render);
    },

    render: function() {
        var _this = this;
        this.collection.each(function(model){
            var view = new TabView({model: model});
            _this.views += view.render();
        });
        $("#tabs-here").html(this.$el.html(_this.views));
    }

  });

  return View;

});

