import React from 'react';
import renderer from 'react-test-renderer';
import ReactDOM from 'react-dom';
import App from '../app';
import theme from 'styles/theme';
import { BrowserRouter } from 'react-router-dom';

const app = (
  <BrowserRouter>
    <App themes={theme} />
  </BrowserRouter>
);

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
