define(function (require) {
    var Vue = require("vue.min");
    var menu = require("components/menu");

    var comp = Vue.component("smashing-header",
        {
            template: "#header-template",
            props: ["menu"],
            data: function() {
                return {
                    title: "Smashing '72",
                    subtitle: "De leukste volleybalvereniging van Diemen!"
                };
            },
            methods: {
                menuExpanded: function() {
                    this.$emit("menu-expanded");
                },
                menuCollapsed: function() {
                    this.$emit("menu-collapsed");
                }
            }
        });
});