"use strict";
exports.__esModule = true;
exports.RequestHandler = void 0;
var request = require("request-promise");
var RequestHandler = /** @class */ (function () {
    function RequestHandler(ServerURL) {
        var _this = this;
        this.BaseURL = ServerURL;
        this.send = function (uri, method, body) {
            return request[method]({
                uri: _this.BaseURL + uri,
                qs: body,
                json: true
            });
        };
    }
    return RequestHandler;
}());
exports.RequestHandler = RequestHandler;
