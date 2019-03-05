define(["vue.min"],
    function (Vue) {
        var comp = Vue.component("smashing-footer",
            {
                template: "#footer-template",
                data: function() {
                    return {
                        content: "<div>Fooooter</div>"
                    }
                }
            });
    });