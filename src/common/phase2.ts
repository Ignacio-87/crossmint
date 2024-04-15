import {
  deleteComethPoints,
  deletePolyanetPoints,
  deleteSoloonPoints,
  getMegaverseGoal,
  updateComethPoints,
  updatePolyanetPoints,
  updateSoloonPoints,
} from "../megaverseApiService";
import { AstralNames, Megaverse, Point } from "../types/astral.type";
import {
  Cometh,
  ComethDirection,
  ComethDirectionType,
} from "../types/cometh.type";
import { Polyanet } from "../types/polyanet.type";
import { Soloon, SoolonColor, SoolonColorType } from "../types/soloon.type";

export const createMultiverse = async () => {
  const megaverse = await getMegaversePoints();
  await updatePolyanetPoints(megaverse.polyanets);
  await updateSoloonPoints(megaverse.soloons);
  await updateComethPoints(megaverse.comeths);
};

export const deleteMultiverse = async () => {
  const megaverse = await getMegaversePoints();
  await deletePolyanetPoints(megaverse.polyanets);
  await deleteSoloonPoints(megaverse.soloons);
  await deleteComethPoints(megaverse.comeths);
};

const isColorValid = (color: string): color is SoolonColorType => {
  const colors = Object.values(SoolonColor);
  return colors.some((c: string) => c === color.toLowerCase());
};

const isDirectionValid = (
  direction: string
): direction is ComethDirectionType => {
  const directions = Object.values(ComethDirection);
  return directions.some((d: string) => d === direction.toLowerCase());
};

const getMegaversePoints = async (): Promise<Megaverse> => {
  const matrix = await getMegaverseGoal();
  const polyanets: Polyanet[] = [];
  const soloons: Soloon[] = [];
  const comeths: Cometh[] = [];

  for (let i: number = 0; i < matrix.length; i++) {
    for (let j: number = 0; j < matrix[i].length; j++) {
      const postion: string = matrix[i][j];

      if (!postion || postion.toLowerCase() === AstralNames.SPACE) {
        continue;
      }

      const point: Point = { row: i, column: j };

      if (postion.toLowerCase() === AstralNames.POLYANET) {
        polyanets.push({ ...point });
        continue;
      }

      const [detail, astralName] = postion.split("_");

      if (
        astralName.toLowerCase() === AstralNames.SOLOON &&
        isColorValid(detail)
      ) {
        soloons.push({
          color: detail.toLowerCase() as SoolonColorType,
          ...point,
        });
        continue;
      }

      if (
        astralName.toLowerCase() === AstralNames.COMETH &&
        isDirectionValid(detail)
      ) {
        comeths.push({
          direction: detail.toLowerCase() as ComethDirectionType,
          ...point,
        });
        continue;
      }
    }
  }

  return { polyanets, soloons, comeths };
};
