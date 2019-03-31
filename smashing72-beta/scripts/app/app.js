define(function (require) {

    var Vue = require("vue.min");

    var header = require("components/header");
    var footer = require("components/footer");

    var homepage = require("pages/homepage");
    var teampage = require("pages/teampage");
    var contentpage = require("pages/contentpage");
    var archivepage = require("pages/archivepage");

    var app = new Vue({
        el: "#app",
        data: {
            appData: JSON.parse(document.getElementById('app-data').innerHTML),
            menuExpanded: false
        }
    });
});