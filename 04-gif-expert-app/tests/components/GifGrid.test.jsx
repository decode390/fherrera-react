import { render, screen } from '@testing-library/react'
import { GifGrid } from '../../src/components'
import { useFetchGifs } from '../../src/hooks/useFetchGifs';

jest.mock('../../src/hooks/useFetchGifs');

describe('test in gifGrid', () => {
  const category = 'One punch';

  test('should be show loading on init', () => {
    useFetchGifs.mockReturnValue({
      images: [],
      isLoading: true
    });

    render(<GifGrid category={category}/>);
    expect(screen.getByText('Cargando...')).toBeTruthy();
    expect(screen.getByText(category));
  });

  test('should be load view with data', () => {
    const gifs = [
      {
        id: '123',
        title: 'title1',
        url: 'https://localhost/url1'
      },
      {
        id: '456',
        title: 'title2',
        url: 'https://localhost/url2'
      },
    ];


    useFetchGifs.mockReturnValue({
      images: gifs,
      isLoading: false
    });

    render(<GifGrid category={category}/>);
    expect(screen.getAllByRole('img').length).toBe(2);
  });
});
