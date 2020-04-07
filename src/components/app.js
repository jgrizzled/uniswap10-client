// Main app component

import React, { useState, useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Switch, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from 'styles/GlobalStyle';
import theme from 'styles/theme';
import Header from 'components/header';
import IndexOverview from 'components/index-overview';
import Loading from 'components/loading';
import BurgerMenu from 'components/burger-menu';
import FAQ from 'components/faq';
import Contact from 'components/contact';
import Settings from 'components/settings';
import fetchIndexData from 'api';

export default function App() {
  const [indexData, setIndexData] = useState(null);
  const [indexSettings, setIndexSettings] = useState({
    currency: 'usd',
    liquidityWeight: '0.5',
    rebalancePeriod: '30',
  });

  // fetch index data on new settings
  useEffect(() => {
    const fetchData = async () => {
      try {
        const { indexByDate, holdingsByDate, tokens } = await fetchIndexData(
          indexSettings
        );
        setIndexData({ indexByDate, holdingsByDate, tokens });
      } catch (e) {
        console.error(e);
      }
    };
    fetchData();
    // eslint-disable-next-line
  }, [JSON.stringify(indexSettings)]);

  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Header />
        <BurgerMenu />
        <Switch>
          <Route path='/settings'>
            <Settings settings={indexSettings} setSettings={setIndexSettings} />
          </Route>
          <Route path='/faq'>
            <FAQ />
          </Route>
          <Route path='/contact'>
            <Contact />
          </Route>
          <Route>
            {indexData ? <IndexOverview data={indexData} /> : <Loading />}
          </Route>
        </Switch>
      </ThemeProvider>
    </BrowserRouter>
  );
}
