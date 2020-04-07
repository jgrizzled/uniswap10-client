import CurrentHoldings from '.';

const holdings = mockData.holdingsByDate[0];
const tokens = mockData.tokens;
const component = <CurrentHoldings holdings={holdings} tokens={tokens} />;

// smoke test
it('renders without crashing', async () => {
  const div = document.createElement('div');
  ReactDOM.render(<Providers>component</Providers>, div);
  ReactDOM.unmountComponentAtNode(div);
});

// shallow snapshot test
it('renders as expected', async () => {
  const wrapper = Enzyme.shallow(component, { wrappingComponent: Providers });
  expect(wrapper).toMatchSnapshot();
});
