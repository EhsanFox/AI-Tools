"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.AITools = void 0;
var Request_Handler_1 = require("./Request.Handler");
var AITools = /** @class */ (function (_super) {
    __extends(AITools, _super);
    function AITools(options) {
        var _this = _super.call(this, "https://ai-tools-server.vercel.app") || this;
        _this.RejectErrors = (options && 'reject' in options) ? options.reject : true;
        _this.HandleOK = (options && 'handleOK' in options) ? options.handleOK : true;
        return _this;
    }
    AITools.prototype.NSFW = function (fileUri) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.send("/api/nsfw", "get", { input: fileUri })
                .then(function (data) {
                if ('ok' in data && !data.ok)
                    if (_this.RejectErrors)
                        reject(data['message']);
                if (_this.HandleOK)
                    delete data['ok'];
                resolve(data);
            })["catch"](function (e) {
                if (_this.RejectErrors)
                    reject(e);
                else
                    resolve(e);
            });
        });
    };
    AITools.prototype.FaceDetector = function (fileUri) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.send("/api/face-detection", "get", { input: fileUri })
                .then(function (data) {
                if ('ok' in data && !data.ok)
                    if (_this.RejectErrors)
                        reject(data['message']);
                if (_this.HandleOK)
                    delete data['ok'];
                resolve(data);
            })["catch"](function (e) {
                if (_this.RejectErrors)
                    reject(e);
                else
                    resolve(e);
            });
        });
    };
    return AITools;
}(Request_Handler_1.RequestHandler));
exports.AITools = AITools;
