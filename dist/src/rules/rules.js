"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var robotjs_1 = __importDefault(require("robotjs"));
var rules_line_1 = require("./rules-line");
var rules_rectangular_1 = require("./rules-rectangular");
var rules_circle_1 = require("./rules-circle");
var screen_1 = require("./screen");
var commands_1 = require("./commands");
function rule(command) {
    var commandData = command.split(' ');
    robotjs_1["default"].setMouseDelay(2);
    var status;
    var up = commands_1.commands.up, down = commands_1.commands.down, left = commands_1.commands.left, right = commands_1.commands.right, scrn = commands_1.commands.scrn, circle = commands_1.commands.circle, rectangle = commands_1.commands.rectangle, square = commands_1.commands.square, position = commands_1.commands.position;
    switch (true) {
        case commandData[0] === up:
            if (+commandData[1]) {
                status = (0, rules_line_1.lineUp)(commandData[1]);
                if (status) {
                    console.log('Successfully');
                    return status;
                }
            }
            return false;
        case commandData[0] === down:
            if (+commandData[1]) {
                status = (0, rules_line_1.lineDown)(commandData[1]);
                if (status) {
                    console.log('Successfully');
                    return status;
                }
            }
            return false;
        case commandData[0] === left:
            if (+commandData[1]) {
                status = (0, rules_line_1.lineLeft)(commandData[1]);
                if (status) {
                    console.log('Successfully');
                    return status;
                }
            }
            return false;
        case commandData[0] === right:
            if (+commandData[1]) {
                status = (0, rules_line_1.lineRight)(commandData[1]);
                if (status) {
                    console.log('Successfully');
                    return status;
                }
            }
            return false;
        case commandData[0] === position:
            var _a = robotjs_1["default"].getMousePos(), x = _a.x, y = _a.y;
            return "".concat(position, " ").concat(x, ",").concat(y);
        case commandData[0] === square:
            if (+commandData[1]) {
                status = (0, rules_rectangular_1.drawRectangular)(Number(commandData[1]));
                if (status) {
                    console.log('Successfully');
                    return status;
                }
            }
            return false;
        case commandData[0] === rectangle:
            if (+commandData[1] && +commandData[2]) {
                status = (0, rules_rectangular_1.drawRectangular)(Number(commandData[1]), Number(commandData[2]));
                if (status) {
                    console.log('Successfully');
                    return status;
                }
            }
            else {
                return false;
            }
        case commandData[0] === circle:
            if (+commandData[1]) {
                status = (0, rules_circle_1.drawCircle)(Number(commandData[1]));
                if (status) {
                    console.log('Successfully');
                    return status;
                }
            }
            return false;
        case commandData[0] === scrn:
            (0, screen_1.screen)();
            break;
        default:
            console.log('this command not found');
            return false;
    }
}
exports["default"] = rule;
//# sourceMappingURL=rules.js.map