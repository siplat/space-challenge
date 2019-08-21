import { s, S, r, R, b, f, _ } from './obstacleMap';

const tiles = [
  [_, 5, _, _, _, _, _, _, _, _],
  [_, 5, _, _, _, _, _, _, _, _],
  [_, 5, _, _, _, _, _, _, _, _],
  [_, 5, _, _, _, _, _, _, _, _],
  [_, 5, _, _, _, _, _, _, _, _],
  [4, 5, _, _, b, _, _, _, _, _],
  [_, _, _, _, b, _, _, _, _, _],
  [_, _, _, _, b, _, _, 5, 4, 3],
  [_, _, _, _, b, _, _, _, _, _],
  [_, _, 7, 3, 2, _, _, _, _, _],
  [_, _, _, _, 3, _, _, _, _, _],
  [_, _, _, _, 5, _, _, _, _, _],
  [4, 5, _, _, 4, 2, 9, _, _, _],
  [3, _, _, _, b, _, _, _, _, _],
  [2, S, _, _, b, _, R, _, _, _],
  [0, 1, 3, _, 4, 5, 2, 1, _, _],
].reverse();

export default { tiles };
