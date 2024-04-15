import { createMultiverse } from "../common/phase2";

const populate = async () => {
  console.log("Populating Crossmint logo. With 🌙SOLoons and ☄comETHs!");

  await createMultiverse();

  console.log(
    "Fininsh to populate Crossmint logo. With 🌙SOLoons and ☄comETHs!"
  );
};

populate();
