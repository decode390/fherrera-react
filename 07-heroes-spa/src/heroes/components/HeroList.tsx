import { ValidPublishers, getHeroesByPublisher } from '@heroes/helpers';
import { HeroCard } from './HeroCard';
import { useMemo } from 'react';

export const HeroList = ({publisher}: {publisher: ValidPublishers}) => {
  const heroes = useMemo(() => getHeroesByPublisher(publisher), [publisher]);

  return (
    <>
      <div className="row rows-col-1 row-cols-md-3 g-3">
        {
          heroes.map(
            hero => <HeroCard key={hero.id} hero={hero}/>
          )
        }
      </div>
    </>
  )
}
