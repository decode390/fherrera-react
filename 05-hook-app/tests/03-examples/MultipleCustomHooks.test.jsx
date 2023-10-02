import { screen, render, fireEvent } from "@testing-library/react";
import { MultipleCustomHooks } from "../../src/03-examples";
import { useFetch } from "../../src/hooks/useFetch";
import { useCounter } from "../../src/hooks/useCounter";

jest.mock("../../src/hooks/useFetch");
jest.mock("../../src/hooks/useCounter");

describe('test in MultipleCustomHooks component', () => {
  const mockUseCounter = () => {
    const increaseCounterMock = jest.fn(current => current+1);
    const decreaseCounterMock = jest.fn(current => current-1);
    useCounter.mockReturnValue({
      counter:1,
      increase: increaseCounterMock,
      decrease: decreaseCounterMock,
      reset: () => {}
    })
    return {
      increase: increaseCounterMock,
      decrease: decreaseCounterMock,
    };
  }

  const mockUseFetchWithValue = () => {
    useFetch.mockReturnValue({
      data: [{
        quote: 'test quote 1',
        author: 'John Doe'
      }],
      isLoading: false,
      error: null
    });
  }

  beforeEach( () => {
    jest.clearAllMocks();
  })

  test('should be show default component', () => {
    useFetch.mockReturnValue({
      data: null,
      isLoading: true,
      error: null
    });
    mockUseCounter();
    render(<MultipleCustomHooks />);
    
    expect(screen.getByText('Loading...')).toBeTruthy();
    expect(screen.getByText('Breaking Bad Quotes')).toBeTruthy();
    expect(screen.getByRole('button', {name: '+1'})).toBeTruthy();
    expect(screen.getByRole('button', {name: '-1'})).toBeTruthy();
  });

  test('should be show quotes', () => {
    mockUseFetchWithValue();
    mockUseCounter();
    render(<MultipleCustomHooks />);

    expect(screen.getByRole('quote').innerHTML).toContain('test quote 1')
    expect(screen.getByRole('contentinfo', {name: 'author'}).innerHTML)
      .toContain('John Doe')
  });

  test('should be increment counter and get', () => {
    mockUseFetchWithValue();
    const {increase} = mockUseCounter();
    render(<MultipleCustomHooks />);

    const incrementButton =  screen.getByRole('button', {name: '+1'});
    fireEvent.click(incrementButton);
    expect(increase).toBeCalledTimes(1);
  });
});
