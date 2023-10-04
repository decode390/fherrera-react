import { heroes } from '@heroes/data/heroes';
import { HeroModel } from '.';

export const getHeroById = (id: string | undefined): HeroModel | null => {
  return heroes.find(hero => hero.id === id) as HeroModel ?? null;
}
