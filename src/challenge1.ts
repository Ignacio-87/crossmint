import {
  deletePolynetsPoints,
  updatePolynetsPoints,
} from "./megaversApiService";

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

const cleanPolynetsPoints = async () => {
  const points = getPolyanetCrossPoints();
  await deletePolynetsPoints(points);
};

const populatePolynetsPoints = async () => {
  const points = getPolyanetCrossPoints();
  await updatePolynetsPoints(points);
};

const populateRunner = async () => {
  console.log("Populating 🪐POLYanet cross");
  await populatePolynetsPoints();
  console.log("Fininsh to populate 🪐POLYanet cross");
};

const deteleRunner = async () => {
  console.log("Deleting 🪐POLYanet cross");
  await cleanPolynetsPoints();
  console.log("Fininsh to delete 🪐POLYanet cross");
};

populateRunner();
// deteleRunner();
