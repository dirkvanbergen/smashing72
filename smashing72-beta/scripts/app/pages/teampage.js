define(function (require) {
    var Vue = require("vue.min");

    var comp = Vue.component("smashing-teampage",
        {
            template: "#teampage-template",
            props: ["page", "html"],
            data: function() {
                return {
                    greeting: "Hallo volleyballer"
                };
            }
        });
});