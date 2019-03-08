requirejs.config({
    baseUrl: "/scripts/lib",
    paths: {
        app: "/scripts/app",
        components: "/scripts/app/components",
        pages: "/scripts/app/pages"
    }
});

requirejs(["app/app"]);