﻿define(function (require) {
    var Vue = require("vue.min");
    var menu = require("components/menu");

    var comp = Vue.component("smashing-header",
        {
            template: "#header-template",
            data: function() {
                return {
                    title: "Smashing '72",
                    subtitle: "De leukste volleybalvereniging van Diemen!"
                };
            }
        });
});