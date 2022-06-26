"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.lineRight = exports.lineLeft = exports.lineDown = exports.lineUp = void 0;
var robotjs_1 = __importDefault(require("robotjs"));
var commands_1 = require("./commands");
var up = commands_1.commands.up, down = commands_1.commands.down, left = commands_1.commands.left, right = commands_1.commands.right;
function lineUp(value) {
    var _a = robotjs_1["default"].getMousePos(), x = _a.x, y = _a.y;
    var posY = y > value ? y - value : 0;
    robotjs_1["default"].moveMouseSmooth(x, posY);
    return up;
}
exports.lineUp = lineUp;
function lineDown(value) {
    var _a = robotjs_1["default"].getMousePos(), x = _a.x, y = _a.y;
    robotjs_1["default"].moveMouseSmooth(x, y + +value);
    return down;
}
exports.lineDown = lineDown;
function lineLeft(value) {
    var _a = robotjs_1["default"].getMousePos(), x = _a.x, y = _a.y;
    var posX = x > value ? x - value : 0;
    robotjs_1["default"].moveMouseSmooth(posX, y);
    return left;
}
exports.lineLeft = lineLeft;
function lineRight(value) {
    var _a = robotjs_1["default"].getMousePos(), x = _a.x, y = _a.y;
    robotjs_1["default"].moveMouseSmooth(x + +value, y);
    return right;
}
exports.lineRight = lineRight;
//# sourceMappingURL=rules-line.js.map