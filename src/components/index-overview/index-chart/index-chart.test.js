import IndexChart from '.';

const component = <IndexChart indexByDate={mockData.indexByDate} />;

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
