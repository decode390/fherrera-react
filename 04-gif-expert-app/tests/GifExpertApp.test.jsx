import { fireEvent, render, screen } from "@testing-library/react";
import { GifExpertApp } from "../src/GifExpertApp";

describe('test in GifExpertApp', () => {

  const submitNewCategory = (category) => {
    const input = screen.getByRole('textbox');
    const form = screen.getByRole('form');
    fireEvent.change(input, {target: {value: category}});
    fireEvent.submit(form);
  }

  test('should load new grid on gifs', () => {
    render(<GifExpertApp />)
    submitNewCategory('One punch');

    expect(screen.getAllByRole('heading', {level: 3}).length).toBe(1)
    expect(screen.getByText('One punch')).toBeTruthy();
  });

  test('should be not repeat category', () => {
    render(<GifExpertApp />)
    submitNewCategory('One punch');
    submitNewCategory('One punch');
    submitNewCategory('Prueba');

    expect(screen.getAllByRole('heading', {level: 3}).length).toBe(2)
  });

  test('should be not load nothing on init', () => {
    render(<GifExpertApp />)
    expect(screen.queryByRole('heading', {level: 3})).toBeNull()
  })
});
