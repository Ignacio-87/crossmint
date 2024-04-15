import { Point } from "./astral.type";

export type SoolonColorType = "blue" | "red" | "purple" | "white";

export enum SoolonColor {
  BLUE = "blue",
  RED = "red",
  PURPLE = "purple",
  WHITE = "white",
}

export interface Soloon extends Point {
  color: SoolonColorType;
}
