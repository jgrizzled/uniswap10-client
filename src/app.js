// Main app component

import React, { useState, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from 'styles/GlobalStyle';
import theme from 'styles/theme';
import Header from 'components/header';
import IndexOverview from 'components/pages/index-overview';
import Loading from 'components/loading';
import BurgerMenu from 'components/burger-menu';
import FAQ from 'components/pages/faq';
import Contact from 'components/pages/contact';
import Settings from 'components/pages/settings';
import { fetchIndexData } from 'api';

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
  );
}
