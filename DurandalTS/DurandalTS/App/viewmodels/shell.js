define(["require", "exports", "plugins/router", "durandal/app"], function(require, exports, router, app) {
    var Shell = (function () {
        function Shell() {
            this.router = router;
        }
        Shell.prototype.search = function () {
            //It's really easy to show a message box.
            //You can add custom options too. Also, it returns a promise for the user's response.
            app.showMessage('Search not yet implemented...');
        };

        Shell.prototype.activate = function () {
            router.map([
                { route: '', title: 'Welcome', moduleId: 'viewmodels/welcome', nav: true },
                { route: 'flickr', moduleId: 'viewmodels/flickr', nav: true }
            ]).buildNavigationModel();

            return router.activate();
        };
        return Shell;
    })();

    
    return Shell;
});
//# sourceMappingURL=shell.js.map
