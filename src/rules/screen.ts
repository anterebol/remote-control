import { commands } from './commands';
import robot from 'robotjs';
import Jimp from 'jimp';
import Emmiter from 'events'

export const resImg = new Emmiter();


export function screen() {
  let { x, y } = robot.getMousePos();
  console.log(x, y)
  const scr = robot.getScreenSize();
  let width = 200;
  let height = 200;
  let proccentX = x / scr.width;
  let proccentY = y / scr.height;
  const screenShot = robot.screen.capture(x + 370 * proccentX - 100, y + 200 * proccentY - 100, width, height);
  const img = screenShot.image;
  console.log(screenShot.height, screenShot.width)
  const data = new Jimp({ data: img, width, height}, (err, image) => {
    if (err) {
      console.log(err);
    } else {
      image.write('image.png');
      image.getBase64(Jimp.AUTO, (err, res) => {
        if (err) {
          console.log(err);
        } else {
          resImg.emit('dataImg', res.replace('data:image/png;base64,', ''))
        }
      });
    }
  });
  return commands.scrn;
}