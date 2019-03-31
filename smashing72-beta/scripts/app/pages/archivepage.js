define(function (require) {
    var Vue = require("vue.min");

    var comp = Vue.component("smashing-archivepage",
        {
            template: "#archivepage-template",
            props: ["page", "html"],
            data: function() {
                return {
                };
            }
        });
});