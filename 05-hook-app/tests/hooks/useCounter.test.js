const { renderHook } = require("@testing-library/react");
const { useCounter } = require("../../src/hooks/useCounter");
const { act } = require("react-dom/test-utils");

describe('test in useCounter hook', () => {
  
  test('should be return default values', () => {
    const {result} = renderHook(()=>useCounter());
    const {counter, increase, decrease, reset} = result.current;

    expect(counter).toBe(10);
    expect(increase).toEqual(expect.any(Function))
    expect(reset).toEqual(expect.any(Function))
    expect(decrease).toEqual(expect.any(Function))
  });

  test('should be return counter 100', () => {
    const {result} = renderHook(()=>useCounter(100));
    expect(result.current.counter).toBe(100)
  });

  test('should be increment the counter', () => {
    const {result} = renderHook(()=>useCounter(100));
    const {increase} = result.current;

    act(() => {
      increase();
      increase(2);
    });

    expect(result.current.counter).toBe(103);
  });

  test('should be decrement the counter', () => {
    const {result} = renderHook(()=>useCounter(100));
    const {decrease} = result.current;

    act(() => {
      decrease();
      decrease(2);
    });

    expect(result.current.counter).toBe(97);
  });

  test('should be reset the counter', () => {
    const {result} = renderHook(()=>useCounter(100));
    const {increase, reset, decrease} = result.current;

    act(() => {
      decrease();
      reset();
    });

    expect(result.current.counter).toBe(100);
  });

});
