import Percent from '.';

const component = <Percent number={1} />;

// smoke test
it('renders without crashing', async () => {
  const div = document.createElement('div');
  ReactDOM.render(<Providers>{component}</Providers>, div);
  ReactDOM.unmountComponentAtNode(div);
});

// shallow snapshot test
it('renders as expected', async () => {
  const wrapper = Enzyme.shallow(component, { wrappingComponent: Providers });
  expect(wrapper).toMatchSnapshot();
});
