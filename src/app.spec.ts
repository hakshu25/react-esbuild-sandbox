import renderer from 'react-test-renderer';
import App from './app';

test('match snapshot', () => {
  const app = App();
  const component = renderer.create(app);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
