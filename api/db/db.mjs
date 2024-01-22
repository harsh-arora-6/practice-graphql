import { JSONFilePreset } from "lowdb/node";
export const db = await JSONFilePreset("../db/db.json", {
  user: {
    id: "jBWMVGjm50l6LGwepDoty",
    username: "frontendmaster",
  },
  pet: [],
});
