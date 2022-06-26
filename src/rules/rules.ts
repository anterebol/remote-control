import robot from 'robotjs';
import { lineUp, lineDown, lineLeft, lineRight } from './rules-line';
import { drawRectangular } from './rules-rectangular';
import { drawCircle } from './rules-circle';
import { screen } from './screen';
import { commands } from './commands';

function rule(command: string) {
  const commandData = command.split(' ');
  robot.setMouseDelay(2);
  let status;
  const {up, down, left, right, scrn, circle, rectangle, square, position} = commands;
  switch (true) {
    case commandData[0] === up:
      if (+commandData[1]) {
        status = lineUp(commandData[1]);
        if (status) {
          console.log('Successfully');
          return status;
        }
      } return false;
    case commandData[0] === down:
      if (+commandData[1]) {
        status = lineDown(commandData[1]);
        if (status) {
          console.log('Successfully');
          return status;
        }
      } return false;
    case commandData[0] === left:
      if (+commandData[1]) {
        status = lineLeft(commandData[1]);
        if (status) {
          console.log('Successfully');
          return status;
        }
      } return false;
    case commandData[0] === right:
      if (+commandData[1]) {
        status = lineRight(commandData[1]);
        if (status) {
          console.log('Successfully');
          return status;
        }
      } return false;
    case commandData[0] === position:
      let {x, y} = robot.getMousePos();
      return `${position} ${x},${y}`;
    case commandData[0] === square:
      if (+commandData[1]) {
        status = drawRectangular(Number(commandData[1]));
        if (status) {
          console.log('Successfully');
          return status;
        } 
      } 
      console.log(false);
      return false;
    case commandData[0] === rectangle:
      if (+commandData[1] && +commandData[2]) {
        status = drawRectangular(Number(commandData[1]), Number(commandData[2]));
        if (status) {
          console.log(status)
          console.log('Successfully');
          return status;
        }
      } 
      console.log(false)
      return false
    case commandData[0] === circle:
      if (+commandData[1]) {
        status = drawCircle(Number(commandData[1]));
        if (status) {
          console.log('Successfully');
          return status;
        }
      }
      console.log(false); 
      return false;
    case commandData[0] === scrn:
      screen();
      break;
    default: 
      console.log('this command not found');
      return false;
  }
}
export default rule;