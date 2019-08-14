import { s, S, r, R, b, f, _ } from './obstacleMap';

const tiles = [
  [_, _, _, f, _, f, _, _, _, _],
  [_, f, _, _, _, _, _, _, f, _],
  [_, _, _, _, R, _, _, _, _, _],
  [_, _, _, 7, 8, 9, _, _, _, _],
  [_, _, f, _, _, _, f, _, _, _],
  [_, _, _, _, _, _, _, _, f, _],
  [f, _, _, _, _, f, _, _, _, _],
  [_, _, _, f, _, _, _, f, _, _],
  [_, _, _, _, _, _, _, _, _, b],
  [_, _, _, _, _, _, _, _, _, _],
  [_, f, _, _, f, _, _, f, _, _],
  [b, _, _, _, _, _, _, _, _, _],
  [_, _, _, _, _, _, _, _, _, _],
  [_, _, _, S, _, _, _, _, _, _],
  [b, b, 0, 3, 2, 1, 4, 0, b, b],
].reverse();

export default { tiles };
