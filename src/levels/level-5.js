import { s, S, r, R, b, f, _ } from './obstacleMap';

const tiles = [
  [_, _, _, _, _, _, 1, 0, 5, _],
  [_, _, _, _, _, _, 2, _, 5, _],
  [3, 5, 5, _, _, _, 3, _, 5, _],
  [2, _, _, 4, 8, 4, 4, _, 5, 1],
  [4, _, _, _, _, _, _, _, _, 4],
  [0, _, 1, _, _, _, _, _, _, 3],
  [1, _, 2, 3, 5, 6, _, _, _, 2],
  [3, _, _, _, _, _, 7, _, s, 0],
  [5, 4, 7, 4, 2, _, 3, 0, 2, 6],
  [8, _, _, _, 2, _, 3, _, _, _],
  [5, _, _, _, 2, _, 6, _, b, _],
  [5, _, R, _, _, _, 5, _, _, _],
  [5, 2, 4, 0, 2, 3, 3, _, b, _],
  [5, _, 4, _, 2, _, 8, _, _, _],
].reverse();

export default { tiles };
