define(function (require) {
    var Vue = require("vue.min");

    var news = require("../components/news");

    var comp = Vue.component("smashing-homepage",
        {
            template: "#homepage-template",
            data: function() {
                return {
                    greeting: "Hallo volleyballer"
                }
            }
        });
});