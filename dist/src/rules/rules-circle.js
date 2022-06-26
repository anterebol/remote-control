"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.drawCircle = void 0;
var robotjs_1 = __importDefault(require("robotjs"));
var commands_1 = require("./commands");
function drawCircle(radius) {
    var mousePos = robotjs_1["default"].getMousePos();
    var _a = robotjs_1["default"].getScreenSize(), width = _a.width, height = _a.height;
    if (mousePos.x + radius > width) {
        mousePos.x = mousePos.x - radius;
    }
    else if (mousePos.x - radius < 0) {
        mousePos.x = mousePos.x + radius;
    }
    if (mousePos.y + radius > height) {
        mousePos.y = mousePos.y - radius;
    }
    else if (mousePos.y - radius < 0) {
        mousePos.y = mousePos.y + radius;
    }
    robotjs_1["default"].dragMouse(mousePos.x + radius, mousePos.y);
    robotjs_1["default"].mouseToggle('down');
    for (var i = 0; i <= Math.PI * 2; i += 0.01) {
        var x = mousePos.x + (radius * Math.cos(i));
        var y = mousePos.y + (radius * Math.sin(i));
        robotjs_1["default"].dragMouse(x, y);
    }
    robotjs_1["default"].mouseToggle('up');
    return commands_1.commands.circle;
}
exports.drawCircle = drawCircle;
//# sourceMappingURL=rules-circle.js.map