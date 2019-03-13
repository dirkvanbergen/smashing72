define(function (require) {
    var Vue = require("vue.min");

    var news = require("components/newsitem");

    var comp = Vue.component("smashing-homepage",
        {
            template: "#homepage-template",
            props: ["page", "html"],
            data: function() {
                return {
                    pageData: JSON.parse(document.getElementById('page-data').innerHTML)
                };
            }
        });
});