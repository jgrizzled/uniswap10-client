import '@testing-library/jest-dom/extend-expect';
import React from 'react';
global.React = React;
import ReactDOM from 'react-dom';
global.ReactDOM = ReactDOM;
import { act } from 'react-dom/test-utils';
global.act = act;
import renderer from 'react-test-renderer';
global.renderer = renderer;
import Enzyme from 'enzyme';
global.Enzyme = Enzyme;
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });
import { ThemeProvider } from 'styled-components';
import { MemoryRouter } from 'react-router-dom';

import theme from 'styles/theme';
global.theme = theme;

global.Providers = (props) => (
  <MemoryRouter initialEntries={['/']} initialIndex={0}>
    <ThemeProvider theme={theme}>{props.children}</ThemeProvider>
  </MemoryRouter>
);

global.mockData = {
  indexByDate: [
    { date: '2020-01-01', index: 100 },
    { date: '2020-01-02', index: 101 },
  ],
  holdingsByDate: [
    { date: '2020-01-01', MKR: 0.5, ZRX: 0.5 },
    { date: '2020-01-01', MKR: 0.5, ZRX: 0.5 },
  ],
  tokens: [
    {
      name: 'Maker',
      symbol: 'MKR',
      address: '0x9f8f72aa9304c8b593d555f12ef6589cc3a579a2',
    },
    {
      name: '0x Protocol Token',
      symbol: 'ZRX',
      address: '0xe41d2489571d322189246dafa5ebde1f4699f498',
    },
  ],
};

// fixes error
global.window.matchMedia = jest.fn().mockImplementation((query) => ({
  matches: false,
  media: query,
  onchange: null,
  addListener: jest.fn(), // deprecated
  removeListener: jest.fn(), // deprecated
  addEventListener: jest.fn(),
  removeEventListener: jest.fn(),
  dispatchEvent: jest.fn(),
}));
