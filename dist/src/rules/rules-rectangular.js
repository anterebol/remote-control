"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.drawRectangular = void 0;
var robotjs_1 = __importDefault(require("robotjs"));
var rules_line_1 = require("./rules-line");
var commands_1 = require("./commands");
function searchDirection(valueX, valueY) {
    var direct = { x: 0, y: 0 };
    var _a = robotjs_1["default"].getMousePos(), x = _a.x, y = _a.y;
    var screenSize = robotjs_1["default"].getScreenSize();
    if (x + +valueX > screenSize.width) {
        direct.x = -valueX;
    }
    else {
        direct.x = valueX;
    }
    if (y + +valueY > screenSize.height) {
        direct.y = -valueY;
    }
    else {
        direct.y = valueY;
    }
    return direct;
}
function drawRectangular(valueX, valueY) {
    if (valueY === void 0) { valueY = valueX; }
    var _a = searchDirection(valueX, valueY), x = _a.x, y = _a.y;
    robotjs_1["default"].mouseToggle('down');
    (0, rules_line_1.lineUp)(y);
    (0, rules_line_1.lineRight)(x);
    (0, rules_line_1.lineDown)(y);
    (0, rules_line_1.lineLeft)(x);
    robotjs_1["default"].mouseToggle('up');
    if (!valueY) {
        return commands_1.commands.square;
    }
    return commands_1.commands.rectangle;
}
exports.drawRectangular = drawRectangular;
//# sourceMappingURL=rules-rectangular.js.map