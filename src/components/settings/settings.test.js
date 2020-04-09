import Settings from '.';

const settings = {
  currency: 'usd',
  liquidityWeight: 0.5,
  rebalancePeriod: 30
};
const component = <Settings settings={settings} setSettings={jest.fn()} />;

// smoke test
it('renders without crashing', async () => {
  const div = document.createElement('div');
  ReactDOM.render(<Providers>{component}</Providers>, div);
  ReactDOM.unmountComponentAtNode(div);
});

// shallow snapshot test
it('renders as expected', async () => {
  const wrapper = Enzyme.mount(component, { wrappingComponent: Providers });
  expect(wrapper).toMatchSnapshot();
});
