// Main app component

import React, { useState, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from 'components/header';
import IndexOverview from 'components/index-overview';
import Loading from 'components/loading';
import BurgerMenu from 'components/burger-menu';
import FAQ from 'components/faq';
import Contact from 'components/contact';
import Settings from 'components/settings';
import fetchIndexData from 'api';
import SplashPage from 'components/splash-page';
import Disclaimer from 'components/disclaimer';

export default function App() {
  const [indexData, setIndexData] = useState(null);
  const [indexSettings, setIndexSettings] = useState({
    currency: 'usd',
    liquidityWeight: 0.5,
    rebalancePeriod: 30
  });

  // fetch index data on new settings
  useEffect(() => {
    const fetchData = async () => {
      setIndexData(false);
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
    <>
      <SplashPage />
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
      <Disclaimer />
    </>
  );
}
