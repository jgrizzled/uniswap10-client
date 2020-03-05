// Main app component

import React, { useState, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import styled, { ThemeProvider } from 'styled-components';
import moment from 'moment';
import GlobalStyle from 'styles/GlobalStyle';
import theme from 'styles/theme';
import Header from 'components/header';
import IndexOverview from 'components/index-overview';
import Loading from 'components/loading';

export default function App() {
  const [indexData, setIndexData] = useState(null);

  // fetch index data
  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log('fetching data');
        const response = await fetch(
          'https://infinite-river-80908.herokuapp.com/api/index'
          //'http://localhost:8000/api/index'
        );
        const data = await response.json();
        const indexByDate = data.dates.map((date, i) => ({
          date,
          indexETH: data.indexETH[i],
          indexUSD: data.indexUSD[i]
        }));
        const holdingsByDate = data.dates.map((date, i) => ({
          date,
          ...data.tokens.reduce((acc, t, j) => {
            acc[t.symbol] = data.weightsByAsset[j][i];
            return acc;
          }, {})
        }));
        console.log('got data ' + indexByDate.length);
        setIndexData({ indexByDate, holdingsByDate, tokens: data.tokens });
      } catch (e) {
        console.error(e);
      }
    };
    fetchData();
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Header />
      {indexData ? <IndexOverview data={indexData} /> : <Loading />}
    </ThemeProvider>
  );
}
