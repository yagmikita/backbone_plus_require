

requirejs.config({

  deps: ['main'],

  paths: {
    'jquery': '../libs/jquery-1.7.2',
    'underscore': '../libs/underscore',
    'backbone': '../libs/backbone',

    'controller': './controller',

    // Plugins
    'text': '../libs/rjs-text'
  },

  shim: {
    'backbone': {
        deps: ['jquery', 'underscore'],
        exports: 'Backbone'
    },

    'controller': {
        exports: 'Controller'
    }
  }

});

