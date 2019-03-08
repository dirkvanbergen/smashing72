define(function (require) {
    var Vue = require("vue.min");
    var submenu = require("components/submenu");

    var comp = Vue.component("smashing-menu",
        {
            template: "#menu-template",
            props: ["menu"],
            data: function() {
                return {
                };
            },
            computed: {
                topLevelItems: function() {
                    var tlis =  this.menu.filter(function(m) {
                        return !m.ParentContentId;
                    });

                    for (var i = 0; i < tlis.length; i++) {
                        var item = tlis[i];
                        item.subItems = this.menu.filter(function(m) {
                            return m.ParentContentId === item.Id;
                        });
                    }
                    return tlis;
                }
            },
            methods: {
                getLinkFor: function (item, parent) {
                    if (parent) return parent.UrlSegment + "/" + item.UrlSegment;
                    return item.UrlSegment;
                }
            }
        });
});