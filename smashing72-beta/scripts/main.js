requirejs.config({
    baseUrl: "scripts/lib",
    paths: {
        app: "../app",
        components: "../app/components",
        pages: "../app/pages"
    }
});

requirejs(["app/app"]);