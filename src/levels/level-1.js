import { s, S, r, R, b, _ } from './obstacleMap';

const tiles = [
  [_, _, _, 5, b, b, 3, _, _, _],
  [_, _, _, 6, 9, 7, 5, _, _, _],
  [_, _, _, _, _, _, _, _, _, _],
  [_, _, _, _, _, _, _, _, _, _],
  [_, _, _, _, _, _, _, _, _, R],
  [7, _, _, 1, 0, 6, 3, 2, 1, 8],
  [4, _, _, _, _, _, _, _, _, _],
  [6, _, _, _, _, _, _, _, _, _],
  [7, 8, _, _, _, _, _, _, _, _],
  [_, _, 6, 7, _, _, _, _, _, _],
  [_, _, _, _, 4, 2, _, _, s, _],
  [_, _, _, _, _, _, 1, 0, 2, 1],
].reverse();

export default { tiles };
