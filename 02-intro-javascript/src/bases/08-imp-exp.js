
import heroes, {owners} from "../data/heroes";

export const getHeroeById = (id) =>{
  return heroes.find(e => e.id == id);
};

// console.log(heroes);
// console.log(getHeroeById(1));
// console.log(owners);
