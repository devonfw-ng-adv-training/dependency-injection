import {Position} from './position';

export interface Player {
  id?: number;
  firstname: string;
  lastname: string;
  team: string;
  position: Position;
  college: string;
  number?: number;
}
