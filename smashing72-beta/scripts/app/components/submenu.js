define(["vue.min"],
    function (Vue) {

        var comp = Vue.component("smashing-submenu",
            {
                template: "#submenu-template",
                props: ["items"]
            });
    });