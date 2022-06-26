import robot from 'robotjs';
import { lineUp, lineDown, lineLeft, lineRight } from './rules-line';
import { commands } from './commands';

function searchDirection(valueX, valueY) {
  let direct = { x: 0, y: 0 };
  let {x, y} = robot.getMousePos();
  let screenSize = robot.getScreenSize();
  if (x + +valueX > screenSize.width) {
    direct.x = -valueX;
  } else {
    direct.x = valueX;
  }
  if (y + +valueY > screenSize.height) {
    direct.y = -valueY;
  } else {
    direct.y = valueY;
  }
  return direct;
}

export function drawRectangular(valueX, valueY = valueX) {
  let { x, y } = searchDirection(valueX, valueY);
  robot.mouseToggle('down');
  lineUp(y);
  lineRight(x);
  lineDown(y);
  lineLeft(x);
  robot.mouseToggle('up');
  if (!valueY) {
    return commands.square;
  } return commands.rectangle;
}