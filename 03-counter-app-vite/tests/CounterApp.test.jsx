import { fireEvent, render, screen } from "@testing-library/react"
import { CounterApp } from "../src/CounterApp"

describe('test in CounterApp', () => {
  const initialValue = 100;
  
  test('should be match with snapshot', () => {
    const {container} = render(<CounterApp value={initialValue}/>)
    expect(container).toMatchSnapshot()
  });

  test('should be load with default value 100', () => {
    render(<CounterApp value={initialValue}/>)
    expect(screen.getByRole('heading', {level: 2}).innerHTML).toContain(initialValue.toString());
  });

  test('should be increment with +1 button', () => {
    render(<CounterApp value={initialValue}/>)
    fireEvent.click(screen.getByText('+1'));
    expect(screen.getByText('101')).toBeTruthy();
  });

  test('should be decrement with -1 button', () => {
    render(<CounterApp value={initialValue}/>)
    fireEvent.click(screen.getByText('-1'));
    expect(screen.getByText('99')).toBeTruthy();
  });

  test('should be work reset button', () => {
    render(<CounterApp value={initialValue}/>)
    fireEvent.click(screen.getByText('+1'));
    fireEvent.click(screen.getByText('+1'));
    /* fireEvent.click(screen.getByText('Reset')); */
    fireEvent.click(screen.getByRole('button', {name: 'btn-reset'}));
    expect(screen.getByText(initialValue)).toBeTruthy();

    /* screen.debug() */
  })
})
