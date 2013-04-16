
define([

  // Libs
  'backbone',

  'text!../templates/item.html'

], function(Backbone, ItemTemplate) {

  var View = Backbone.View.extend({

    template: _.template(ItemTemplate),

    events: {
      'click': 'select'
    },

    initialize: function() {
      _.bindAll(this);
      this.model.on('destroy', this.remove);
    },

    render: function() {
      return this.template(this.model.toJSON());
    },

    select: function() {
        $("#tabs .selected").removeClass('youarehere');
        this.model.set('cls', 'youarehere');
    }

  });

  return View;

});