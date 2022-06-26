"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var index_1 = require("./src/http_server/index");
var ws_1 = require("ws");
var rules_1 = __importDefault(require("./src/rules/rules"));
var screen_1 = require("./src/rules/screen");
var commands_1 = require("./src/rules/commands");
var HTTP_PORT = 3000;
var wss = new ws_1.WebSocketServer({ server: index_1.server });
wss.on('connection', function connection(ws) {
    var response;
    var currentCommand;
    screen_1.resImg.on('dataImg', function (res) {
        ws.send("".concat(commands_1.commands.scrn, " ").concat(res));
        console.log(res);
    });
    ws.on('message', function message(data) {
        currentCommand = data.toString();
        console.log('received: %s', currentCommand);
        response = (0, rules_1["default"])(currentCommand);
        if (!currentCommand.includes('prnt_scrn')) {
            ws.send("".concat(response));
            if (response.includes('mouse_position')) {
                console.log(response);
            }
        }
    });
    ws.on('error', function (err) { return console.log(err); });
    ws.send('websocket connection');
});
console.log("Start static http server on the ".concat(HTTP_PORT, " port!"));
console.log('Use ws://localhost:3000 for connecting websocket');
index_1.server.listen(HTTP_PORT);
//# sourceMappingURL=index.js.map