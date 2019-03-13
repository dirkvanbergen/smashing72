define(function (require) {
    var Vue = require("vue.min");

    var comp = Vue.component("smashing-newsitem",
        {
            template: "#newsitem-template",
            props: ["item"]
        });
});