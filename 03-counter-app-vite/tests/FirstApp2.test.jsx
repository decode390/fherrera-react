const { render, screen } = require("@testing-library/react")
import {FirstApp} from "../src/FirstApp";


describe('Test in FirstApp', () => {
  const title = 'MyTitle';
  const subTitle = 'MySubTitle';

  test('should be match with snapshot', () => {
    const { container } = render(<FirstApp title={title}/>);

    expect(container).toMatchSnapshot();
  });

  test('should be show title message', () => {
    render(<FirstApp title={title}/>);
    // screen.debug();
    
    expect(screen.getByText(title)).toBeTruthy();
  });

  test('should be show title in h1', () => {
    render(<FirstApp title={title}/>);

    expect(screen.getByRole('heading', {level: 1}).innerHTML).toContain(title);
  });

  test('should be show subtitle sended by props', () => {
    render(<FirstApp title={title} subTitle={subTitle}/>);

    expect(screen.getAllByText(subTitle).length).toBe(2);
  });

});

