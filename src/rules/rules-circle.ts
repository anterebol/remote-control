import robot from 'robotjs';
import { commands } from './commands';

export function drawCircle(radius: number) {
  let mousePos = robot.getMousePos();
  const { width, height } = robot.getScreenSize();
  if (mousePos.x + radius >  width) {
    mousePos.x = mousePos.x - radius;
  } else if (mousePos.x - radius < 0) {
    mousePos.x = mousePos.x + radius;
  }
  if (mousePos.y + radius > height) {
    mousePos.y = mousePos.y - radius;
  } else if (mousePos.y - radius < 0) {
    mousePos.y = mousePos.y + radius;
  }
  robot.dragMouse(mousePos.x + radius, mousePos.y);
  robot.mouseToggle('down');
    for (let i = 0; i <= Math.PI * 2; i += 0.01) {
        const x = mousePos.x + (radius * Math.cos(i));
        const y = mousePos.y + (radius * Math.sin(i));
        
        robot.dragMouse(x, y);
    }
  robot.mouseToggle('up');
  return commands.circle;
}