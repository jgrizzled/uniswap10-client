import Menu from '.';

const component = <Menu open={false} setOpen={jest.fn()} />;

// smoke test
it('renders without crashing', async () => {
  const div = document.createElement('div');
  ReactDOM.render(<Providers>{component}</Providers>, div);
  ReactDOM.unmountComponentAtNode(div);
});

// snapshot test
it('renders as expected', async () => {
  const wrapper = Enzyme.mount(component, { wrappingComponent: Providers });
  expect(wrapper).toMatchSnapshot();
});
