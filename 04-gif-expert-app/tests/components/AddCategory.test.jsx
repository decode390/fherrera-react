import { fireEvent, render, screen } from "@testing-library/react"
import { AddCategory } from "../../src/components/AddCategory"

describe('test in AddCategory', () => {
  const inputValue = 'One punch'

  test('should be change text field', () => {
    render(<AddCategory onNewCategory={()=>{}}/>);
    const input = screen.getByRole('textbox');

    fireEvent.change(input, {target: {value: inputValue}});
    expect(input.value).toBe(inputValue);
  });

  test('should be send text field value', () => {
    const onNewCategory = jest.fn(v => v);
    render(<AddCategory onNewCategory={onNewCategory}/>);
    const input = screen.getByRole('textbox');
    const form  = screen.getByRole('form');

    fireEvent.change(input, {target: {value: inputValue}});
    fireEvent.submit(form);
    expect(input.value).toBe('');
    expect(onNewCategory).toHaveReturnedWith(inputValue);
  });

  test('should be do nothing if input value length is less than 2', () => {
    const onNewCategory = jest.fn(v => v);
    render(<AddCategory onNewCategory={onNewCategory}/>);
    const input = screen.getByRole('textbox');
    const form  = screen.getByRole('form');

    fireEvent.change(input, {target: {value: 'a'}});
    fireEvent.submit(form);
    expect(input.value).toBe('a');
    expect(onNewCategory).not.toHaveBeenCalled();
  });

});
