import { Cometh } from "./cometh.type";
import { Polyanet } from "./polyanet.type";
import { Soloon } from "./soloon.type";

export enum AstralNames {
  SOLOON = "soloon",
  POLYANET = "polyanet",
  COMETH = "cometh",
  SPACE = "space",
}

export interface Point {
  column: number;
  row: number;
}

export interface Megaverse {
  polyanets: Polyanet[];
  soloons: Soloon[];
  comeths: Cometh[];
}
