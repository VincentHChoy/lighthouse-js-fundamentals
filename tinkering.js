const moves = ['north', 'north', 'west', 'west', 'north', 'east', 'north'];

const finalPosition = function (moves) {
  let start = [0, 0];
  for (const direction of moves) {
    console.log(direction)
    switch (direction) {
    case 'north':
      start[1] += 1;
      break;
    case 'south':
      start[1] -= 1;
      break;
    case 'east':
      start[0] += 1;
      break;
    case 'west':
      start[0] -= 1;
      break;
    default:
      console.log('someting wong')
      break;
    }
  } return start
}

console.log(finalPosition(moves))