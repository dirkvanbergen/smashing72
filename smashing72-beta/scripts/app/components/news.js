define(function (require) {
    var Vue = require("vue.min");


    var news = require("components/newsitem");

    var comp = Vue.component("smashing-news",
        {
            template: "#news-template"
        });
});