define(function (require) {
    var Vue = require("vue.min");
    var submenu = require("components/submenu");

    var comp = Vue.component("smashing-menu",
        {
            template: "#menu-template",
            props: ["menu"],
            data: function() {
                return {
                    expanded: false
                };
            },
            computed: {
                topLevelItems: function() {
                    var tlis =  this.menu.filter(function(m) {
                        return !m.ParentContentId;
                    });
                    var sortItems = function(a, b) {
                        if (a.SortOrder < b.SortOrder) return -1;
                        if (a.SortOrder > b.SortOrder) return 1;
                        return 0;
                    };

                    for (var i = 0; i < tlis.length; i++) {
                        var item = tlis[i];
                        var subs = this.menu.filter(function(m) {
                            return m.ParentContentId === item.Id;
                        });

                        subs.sort(sortItems);

                        item.subItems = subs;
                    }

                    tlis.sort(sortItems);
                    return tlis;
                }
            },
            methods: {
                isActive: function (item) {
                    var locationParts = location.pathname.split("/").filter(function (p) { return p.length > 0});
                    if (locationParts.length === 0) return item.UrlSegment === "/";
                    return item.UrlSegment === locationParts[0];
                },
                isMenuItem: function(item) {
                    return item.DataType === "MenuItem";
                },
                expand: function() {
                    this.expanded = true;
                    this.$emit("menu-expanded");
                },
                collapse: function () {
                    this.expanded = false;
                    this.$emit("menu-collapsed");
                },
                openSubmenu: function(item) {
                    for (var i = 0; i < this.$children.length; i++) {
                        var sub = this.$children[i];
                        if (sub.parent.Id === item.Id) {
                            sub.expand();
                        }
                    }
                },
                subOpen: function (item) {
                    for (var i = 0; i < this.$children.length; i++) {
                        var sub = this.$children[i];
                        if (sub.parent.Id === item.Id) {
                            return sub.expanded;
                        }
                    }
                }
            }
        });
});