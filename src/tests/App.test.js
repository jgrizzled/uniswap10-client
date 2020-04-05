import App from '../app';

jest.mock('api.js', () => () => mockData);

const app = <App themes={theme} />;

// smoke test
it('renders without crashing', async () => {
  const div = document.createElement('div');
  await act(async () => {
    ReactDOM.render(app, div);
  });
  ReactDOM.unmountComponentAtNode(div);
});

// shallow snapshot test
it('renders as expected', async () => {
  let wrapper;
  await act(async () => {
    wrapper = Enzyme.shallow(app);
    await new Promise((resolve) => setTimeout(resolve, 0));
    wrapper.update();
  });
  expect(wrapper).toMatchSnapshot();
});
