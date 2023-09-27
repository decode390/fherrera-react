import { useCounter } from "../hooks/useCounter"

export const CounterWithCustomHook = () => {
  const {counter, increase, reset, decrease} = useCounter();

  return (
    <>
      <h1>Counter with hook: {counter}</h1>
      <hr/>

      <button 
        className="btn btn-primary" 
        onClick={increase}
      >+1</button>
      <button 
        className="btn btn-dark"
        onClick={reset}
      >Reset</button>
      <button 
        className="btn btn-danger"
        onClick={decrease}
      >-1</button>
    </>
  )
}
