import { deletePolyanetCross } from "../common/phase1";

const deteleRunner = async () => {
  console.log("Deleting 🪐POLYanet cross");

  await deletePolyanetCross();

  console.log("Fininsh to delete 🪐POLYanet cross");
};

deteleRunner();
