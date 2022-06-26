import { server } from './src/http_server/index';
import { WebSocketServer } from 'ws';
import rule from './src/rules/rules';
import { resImg } from './src/rules/screen';
import { commands } from './src/rules/commands';

const HTTP_PORT = 3000;

const wss = new WebSocketServer({ server });

wss.on('connection', function connection(ws) {
  let response;
  let currentCommand;
  resImg.on('dataImg', (res) => {
    ws.send(`${commands.scrn} ${res}`)
    console.log(res)
  })
  ws.on('message', function message(data) {
    currentCommand = data.toString();
    console.log('received: %s', currentCommand);
    response = rule(currentCommand);
    if (!currentCommand.includes('prnt_scrn')) {
      if (typeof response === 'string') {
        if (response.includes('mouse_position')) {
          console.log(response);
          ws.send(`${response}`);
        } else {
          ws.send(`${response}`);
        }
      }
    }
  });
  ws.on('error', (err) => console.log(err))
  ws.send('websocket connection');
});

console.log(`Start static http server on the ${HTTP_PORT} port!`);
console.log('Use ws://localhost:3000 for connecting websocket')
server.listen(HTTP_PORT);