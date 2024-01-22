import { createPetModel } from "./pet.mjs";
import { createUserModel } from "./user.mjs";
import { db } from "./db.mjs";

export const models = {
  Pet: createPetModel(db),
  User: createUserModel(db),
};
