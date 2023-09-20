const { render } = require("@testing-library/react")
import {FirstApp} from "../src/FirstApp";


describe('Test in FirstApp', () => {
  test('should be match with snapshot', () => {
    const title = 'My title';
    const {container} = render(<FirstApp title={title}/>)

    expect(container).toMatchSnapshot();
  });

  test('should show title in h1', () => {
    const title = 'My title';
    const {container, getByText, getByTestId} = render(<FirstApp title={title}/>)

    expect(getByText(title)).toBeTruthy();
    const h1 = container.querySelector('h1');
    // expect(h1.innerHTML).toBe(title);
    // expect(h1.innerHTML).toContain(title);
    
    expect(getByTestId('test-title').innerHTML).toContain(title);
  });

  test('should show subtitle from props', () => {
    const title = 'My title';
    const subTitle = '123';
    const { getAllByText } = render(
      <FirstApp 
        title={title} 
        subTitle={subTitle}
      />
    )

    // expect(getByText(subTitle)).toBeTruthy();
    expect(getAllByText(subTitle).length).toBe(2);
  });
});
