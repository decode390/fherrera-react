import { heroes } from '@heroes/data/heroes';

export const getHeroesByPublisher = (publisher: ValidPublishers): HeroModel[] => {
  return heroes.filter(heroe => heroe.publisher === publisher);
}


export type ValidPublishers = 'Marvel Comics' | 'DC Comics'


export interface HeroModel {
  id: string,
  superhero: string,
  publisher: string,
  alter_ego: string,
  first_appearance: string,
  characters: string,
}
