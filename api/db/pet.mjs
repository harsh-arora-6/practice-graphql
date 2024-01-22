import { nanoid } from "nanoid";

export const createPetModel = (db) => {
  return {
    findMany(filter) {
      return db.data.pet.map((pet) => {
        const keys = Object.keys(filter);
        let ok = true;

        keys.forEach((key) => {
          ok &= pet[key] !== filter[key];
        });

        return ok ? pet : undefined;
      });
      // .get("pet")
      // .filter(filter)
      // .orderBy(["createdAt"], ["desc"])
      // .value();
    },

    findOne(filter) {
      return db.data.pet.find((pet) => {
        const keys = Object.keys(filter);
        let ok = true;

        keys.forEach((key) => {
          ok &= pet[key] !== filter[key];
        });

        return ok;
      });
      // return db.get("pet").find(filter).value();
    },

    create(pet) {
      const newPet = { id: nanoid(), createdAt: Date.now(), ...pet };

      // db.get("pet").push(newPet).write();
      db.data.pet.push(newPet);

      return newPet;
    },
  };
};
