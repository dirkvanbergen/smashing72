define(function (require) {
    var Vue = require("vue.min");
    var submenu = require("components/submenu");

    var comp = Vue.component("smashing-menu",
        {
            template: "#menu-template",
            data: function() {
                return {
                    topLevelItems: [
                        { text: "Home", link: "/", subItems: [], isActive: true },
                        {
                            text: "Teams",
                            isActive: false,
                            link: "",
                            subItems: [
                                { text: "Dames 1", link: "/teams/dames1/" },
                                { text: "Dames 2", link: "/teams/dames2/" },
                                { text: "Dames 3", link: "/teams/dames3/" },
                                { text: "Heren 1", link: "/teams/heren1/" },
                                { text: "Heren 2", link: "/teams/heren2/" },
                                { text: "Heren 3", link: "/teams/heren3/" },
                                { text: "Heren 4", link: "/teams/heren4/" },
                                { text: "Meisjes A1", link: "/teams/meisjesa1/" },
                                { text: "Meisjes B1", link: "/teams/meisjesb1/" },
                                { text: "Meisjes B2", link: "/teams/meisjesb2/" },
                                { text: "Meisjes B3", link: "/teams/meisjesb3/" },
                                { text: "Meisjes C1", link: "/teams/meisjesc1/" },
                                { text: "Meisjes C2", link: "/teams/meisjesc2/" },
                                { text: "CMV Niveau 1", link: "/teams/cmv1/" },
                                { text: "CMV Niveau 2", link: "/teams/cmv2/" },
                                { text: "CMV Niveau 3", link: "/teams/cmv3/" },
                                { text: "CMV Niveau 5", link: "/teams/cmv5/" },
                                { text: "Recreanten", link: "/teams/recreanten/" },
                                { text: "Open Club Team", link: "/teams/openclub/" }
                            ]
                        },
                        {
                            text: "Jeugd",
                            isActive: false,
                            link: "",
                            subItems: [
                                { text: "Jeugd algemeen", link: "/jeugd/algemeen/" },
                                { text: "Jeugd wedstrijdverslagen", link: "/jeugd/wedstrijdverslagen/" },
                                { text: "Jeugd beachvolleybal", link: "/jeugd/beachvolleybal/" },
                                { text: "Jeugd toptoernooien", link: "/jeugd/toptoernooien/" }
                            ]
                        },
                        {
                            text: "Over Smashing '72",
                            isActive: false,
                            link: "",
                            subItems: [
                                { text: "Algemeen", link: "/oversmashing/algemeen/" },
                                { text: "Bestuur", link: "/oversmashing/bestuur/" },
                                { text: "Commissies", link: "/oversmashing/commissies/" },
                                { text: "Sporthal", link: "/oversmashing/sporthal/" }
                            ]
                        }
                    ]
                };
            }
        });
});