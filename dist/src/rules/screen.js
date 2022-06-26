"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.screen = exports.resImg = void 0;
var commands_1 = require("./commands");
var robotjs_1 = __importDefault(require("robotjs"));
var jimp_1 = __importDefault(require("jimp"));
var events_1 = __importDefault(require("events"));
exports.resImg = new events_1["default"]();
function screen() {
    var _a = robotjs_1["default"].getMousePos(), x = _a.x, y = _a.y;
    console.log(x, y);
    var scr = robotjs_1["default"].getScreenSize();
    var width = 200;
    var height = 200;
    var proccentX = x / scr.width;
    var proccentY = y / scr.height;
    var screenShot = robotjs_1["default"].screen.capture(x + 370 * proccentX - 100, y + 200 * proccentY - 100, width, height);
    var img = screenShot.image;
    console.log(screenShot.height, screenShot.width);
    var data = new jimp_1["default"]({ data: img, width: width, height: height }, function (err, image) {
        if (err) {
            console.log(err);
        }
        else {
            image.write('image.png');
            image.getBase64(jimp_1["default"].AUTO, function (err, res) {
                if (err) {
                    console.log(err);
                }
                else {
                    exports.resImg.emit('dataImg', res.replace('data:image/png;base64,', ''));
                }
            });
        }
    });
    return commands_1.commands.scrn;
}
exports.screen = screen;
//# sourceMappingURL=screen.js.map