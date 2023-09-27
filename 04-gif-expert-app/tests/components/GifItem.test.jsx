import { render, screen } from "@testing-library/react"
import { GiftItem } from "../../src/components/GiftItem"

describe('test in GifItem', () => {
  const title = 'TitleTest';
  const url = 'http://test.img.com/img.jpg';

  test('should be match with snapshot', () => {
    const {container} = render(
      <GiftItem 
        title={title}
        url={url}
      />
    );
    /* screen.debug() */
    expect(container).toMatchSnapshot();
  });

  test('should be load src and alt in img', () => {
    render(<GiftItem title={title} url={url}/>);
    const {src, alt} = screen.getByRole('img');
    expect(src).toBe(url);
    expect(alt).toBe(title);
  });

  test('should be show title', () => {
    render(<GiftItem title={title} url={url}/>);
    expect(screen.getByText(title)).toBeTruthy();
  })
});
