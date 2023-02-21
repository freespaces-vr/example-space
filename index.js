import { Space, ThreeBox } from 'freespaces';

let space = new Space(3463);

let box = new ThreeBox({ x: 1, y: 1, z: 1 }, { x: 0, y: 0, z: -5 }, { x: 0, y: 0, z: 0 }, 0xffff00);

space.initialize = () => {
  console.log('Space initialized');
  space.addObject(box);
}

space.playerJoined = (player) => {
  console.log(`Player joined. ID: ${player.id}`);
}

space.playerLeft = (player) => {
  console.log(`Player left. ID: ${player.id}`);
}

space.update = () => {
  box.rotation.x += 0.01;
  box.rotation.y += 0.01;
}

space.start(() => console.log('Space started on port 3463'));