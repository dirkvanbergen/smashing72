define(["vue.min"],
    function (Vue) {

        var comp = Vue.component("smashing-submenu",
            {
                template: "#submenu-template",
                props: ["items", "parent"],
                data: function() {
                    return {
                        expanded: false
                    };
                },
                methods: {
                    expand: function() {
                        this.expanded = !this.expanded;
                    }
                }
            });
    });