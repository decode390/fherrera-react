import { heroes } from "@heroes/data/heroes";
import { HeroModel } from ".";

export const getHeroesByName = (name: string = ''): HeroModel[] => {
  name = name.toLowerCase().trim();
  if(name.length === 0) return [];

  return heroes.filter(
    hero => hero.superhero.toLocaleLowerCase().includes(name)
  );
}
