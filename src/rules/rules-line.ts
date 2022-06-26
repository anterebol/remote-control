import robot from 'robotjs';
import { commands } from './commands';
const {up, down, left, right} = commands;

export function lineUp(value) {
  let {x, y} = robot.getMousePos();
  const posY = y > value ? y - value : 0
  robot.moveMouseSmooth(x, posY);
  return up;
}

export function lineDown(value) {
  let {x, y} = robot.getMousePos();
  robot.moveMouseSmooth(x, y + +value);
  return down;
}

export function lineLeft(value) {
  let {x, y} = robot.getMousePos();
  const posX = x > value ? x - value : 0;
  robot.moveMouseSmooth(posX, y);
  return left;
}

export function lineRight(value) {
  let {x, y} = robot.getMousePos();
  robot.moveMouseSmooth(x + +value, y);
  return right;
}

