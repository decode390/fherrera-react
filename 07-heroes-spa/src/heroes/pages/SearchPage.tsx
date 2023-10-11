import { HeroCard } from '@heroes/components'
import { getHeroesByName } from '@heroes/helpers';
import { useForm } from '@/shared/hooks/useForm'
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useMemo } from 'react';

export const SearchPage = () => {
  const [params] = useSearchParams();
  const q = params.get('q') ?? '';
  const heroes = useMemo(()=> getHeroesByName(q), [q]);

  const {form, onInputChange} = useForm({searchText: q});
  const {searchText} = form;

  const navigate = useNavigate();

  const showSearch = q.length === 0;
  const showError = q.length > 0 && heroes.length === 0;

  const onFormSubmit = (evt: any) => {
    evt.preventDefault();
    /* if (searchText.trim().length <= 1) return; */
    navigate(`?q=${searchText}`);
  }


  return (
    <>
      <h1>SearchPage</h1>
      <hr/>

      <div className="row">
        <div className="col-5">
          <h4>Searching</h4>
          <hr/>
          <form aria-label='search' onSubmit={onFormSubmit}>
            <input 
              type="text"
              placeholder="Search a hero"
              className="form-control"
              name="searchText"
              autoComplete="off"
              value={searchText}
              onChange={onInputChange}
            />

            <button className="btn btn-outline-primary mt-1">
              Search
            </button>
          </form>

        </div>

        <div className="col-7">
          <h4>Results</h4>
          <hr/>

          <div 
            className="alert alert-primary animate__animated animate__fadeIn"
            style={{display: showSearch ? '' : 'none'}}
          >
            Search a hero
          </div>

          <div aria-label='no-hero-alert'
            className="alert alert-danger animate__animated animate__fadeIn"
            style={{display: showError ? '' : 'none'}}
          >
            No hero for <b>{q}</b>
          </div>

          { heroes.map(hero => (<HeroCard key={hero.id} hero={hero}/>) ) } 
        </div>
      </div>
    </>
  )
}
