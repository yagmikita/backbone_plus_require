define([
    'backbone',
    'modules/tabs/collections/tabs',
    'modules/tabs/views/list'
], function(
    Backbone,
    Tabs,
    TabsView
){
    var Controller = Backbone.Router.extend({
        tabs: [
            {"name": "Поезд", "link": "#train", "cls": ""},
            {"name": "Автобус", "link": "#bus", "cls": ""},
            {"name": "Самолет", "link": "#plain", "cls": ""},
            {"name": "Событие", "link": "#event", "cls": ""},
            {"name": "Футбол", "link": "#football", "cls": ""},
            {"name": "Кино", "link": "#cinema", "cls": ""}
        ],

        routes: {
            "": "indexAction",
            "index": "indexAction",
            "train": "trainAction",
            "train/": "trainAction",
            "bus": "busAction",
            "bus/": "busAction",
            "plain": "plainAction",
            "plain/": "plainAction",
            "event": "eventAction",
            "event/": "eventAction",
            "cinema": "cinemaAction",
            "cinema/": "cinemaAction",
            "football": "footballAction",
            "football/": "footballAction",
            ":word": "errorAction",
        },

        notActive: "<h3>Coming soon!</h3>",

        unselectTabs: function() {
            for(i in this.tabs) {
                this.tabs[i].cls = "";
            }
        },

        renderTabs: function(tabName) {
            var _tabs = [];
            this.unselectTabs();
            if (typeof tabName !== "undefined" || tabName == "") {
                for(i in this.tabs) {
                    if (this.tabs[i].link === '#' + tabName)
                        this.tabs[i].cls = 'youarehere';
                    _tabs.push(this.tabs[i]);
                }
            } else {
                _tabs = this.tabs;
            }
            this.tabs = _tabs;
            var collection = new Tabs();
            var view = new TabsView({
                collection: collection
            });
            collection.reset(this.tabs);
        },

        renderAll: function(params) {
            this.renderTabs(params.tabName);
            $("#container").html(params.content);
        },

        initialize: function() {
            //debugger;
            console.log("Router :: init()");
        },

        indexAction: function() {
            //debugger;
            console.log("Router :: indexAction()");

            window.location.hash = "train";
        },

        errorAction: function() {
            //debugger;
            console.log("Router :: error()");

            this.renderAll({
                "tabName": "",
                "content": "<h3>Error: wrong URL.</h3>"
            });
        },

        trainAction: function() {
            //debugger;
            console.log("Router :: trainAction()");

            this.renderAll({
                "tabName": "train",
                "content": "<h3>Yahoo!</h3>"
            });
        },

        plainAction: function() {
            //debugger;
            console.log("Router :: plainAction()");

            this.renderAll({
                "tabName": "plain",
                "content": this.notActive
            });
        },

        busAction: function() {
            //debugger;
            console.log("Router :: busAction()");

            this.renderAll({
                "tabName": "bus",
                "content": this.notActive
            });
        },

        eventAction: function() {
            //debugger;
            console.log("Router :: eventAction()");

            this.renderAll({
                "tabName": "event",
                "content": this.notActive
            });
        },

        cinemaAction: function() {
            //debugger;
            console.log("Router :: cinemaAction()");

            this.renderAll({
                "tabName": "cinema",
                "content": this.notActive
            });
        },

        footballAction: function() {
            //debugger;
            console.log("Router :: footballAction()");

            this.renderAll({
                "tabName": "football",
                "content": this.notActive
            });
        },

        /*tabsAction: function() {
            debugger;
            console.log("Router :: tabsAction()");

            var collection = new Tabs;
            var view = new TabsView({
              collection: collection
            });

            collection.fetch();
        }*/
        
    });
    return Controller;
});
