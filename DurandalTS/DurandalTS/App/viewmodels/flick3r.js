define(["require", "exports", "plugins/http", "durandal/app", "knockout"], function(require, exports, http, app, ko) {
    var flickr = (function () {
        function flickr() {
            this.displayName = "Flickr";
            this.images = ko.observableArray([]);
        }
        flickr.prototype.activate = function () {
            var _this = this;
            //the router's activator calls this function and waits for it to complete before proceding
            if (this.images().length > 0) {
                return;
            }
            var requestPromise = http.jsonp('http://api.flickr.com/services/feeds/photos_public.gne', {
                tags: 'mount ranier',
                tagmode: 'any',
                format: 'json'
            }, 'jsoncallback').then(function (response) {
                _this.images(response.items);
            });

            return requestPromise;
        };

        flickr.prototype.select = function (item) {
            //the app model allows easy display of modal dialogs by passing a view model
            //views are usually located by convention, but you an specify it as well with viewUrl
            item.viewUrl = 'views/detail';
            app.showDialog(item);
        };

        flickr.prototype.canDeactivate = function () {
            //the router's activator calls this function to see if it can leave the screen
            return app.showMessage('Are you sure you want to leave this page?', 'Navigate', ['Yes', 'No']);
        };
        return flickr;
    })();
    exports.flickr = flickr;
});
//# sourceMappingURL=flick3r.js.map
