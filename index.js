const buster = require("@4awpawz/buster");

const busterConfig = {
    command: "bust",
    options: {
        verbose: true,
        manifest: true,
        safeMode: false
    },
    directives: [
        "media/**/*.jpg:1:media",
        "./index.html:2:.",
        "css/test.css:3:css",
        "script/test.js:3:script"
    ]
};

buster(busterConfig);