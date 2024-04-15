import {
  deletePolyanetPoints,
  updatePolyanetPoints,
} from "../megaverseApiService";

export const populatePolyanetCross = async () => {
  const points = getPolyanetCrossPoints();
  await updatePolyanetPoints(points);
};

export const deletePolyanetCross = async () => {
  const points = getPolyanetCrossPoints();
  await deletePolyanetPoints(points);
};

const getPolyanetCrossPoints = () => {
  const CROSS_START = 2;
  const CROSS_END = 9;
  const UNIVERSE_LENGHT = 10;

  const pointsToDraw = [];

  for (let i = CROSS_START; i < CROSS_END; i++) {
    pointsToDraw.push({
      row: i,
      column: i,
    });

    pointsToDraw.push({
      row: UNIVERSE_LENGHT - i,
      column: i,
    });
  }

  return pointsToDraw;
};
