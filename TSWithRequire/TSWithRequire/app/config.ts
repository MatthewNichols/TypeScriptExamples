/// <reference path="../scripts/typings/requirejs/require.d.ts" />

requirejs.config({
    paths: {
        "jquery": "../Scripts/jquery-2.1.4"
    }
});

require(["app"]);