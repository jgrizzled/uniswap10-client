import React from 'react';
import renderer from 'react-test-renderer';
import ReactDOM from 'react-dom';
import App from '../app';
import theme from 'styles/theme';

const app = <App themes={theme} />;

// smoke test
it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(app, div);
  ReactDOM.unmountComponentAtNode(div);
});

// shallow snapshot test
it('renders as expected', () => {
  const tree = renderer.create(app).toJSON();
  expect(tree).toMatchSnapshot();
});
