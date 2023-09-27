import { useFetch, useCounter } from '../hooks';
import { LoadingQuote, Quote} from '.';

export const MultipleCustomHooks = () => {
  const { counter, increase, decrease } = useCounter(1);

  const { data, isLoading } = 
    useFetch(`https://api.breakingbadquotes.xyz/v1/quotes/${counter}`);

  return (
    <>
      <h1>Breaking Bad Quotes</h1>
      <hr/>

      <button 
        onClick={increase} 
        className="btn btn-primary"
      >+1</button>
      <button 
        onClick={decrease} 
        className="btn btn-primary"
      >-1</button>
      <hr/>

      { 
        isLoading 
        ? <LoadingQuote />
        : data.map(item => <Quote key={item.quote} quoteItem={item}/>)
      }
    </>
  )
}
