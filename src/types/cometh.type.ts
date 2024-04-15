import { Point } from "./astral.type";

export type ComethDirectionType = "up" | "down" | "right" | "left";

export enum ComethDirection {
  UP = "up",
  DOWN = "down",
  RIGHT = "right",
  LEFT = "left",
}

export interface Cometh extends Point {
  direction: ComethDirectionType;
}
