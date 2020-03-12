import { API_URL } from 'config';

export const fetchIndexData = async ({
  currency,
  rebalancePeriod,
  liquidityWeight
}) => {
  const response = await fetch(
    `${API_URL}?c=${currency}&rp=${rebalancePeriod}&lw=${liquidityWeight}`
  );
  const data = await response.json();
  if (data.error) throw new Error(data.error);
  const indexByDate = data.dates.map((date, i) => ({
    date,
    index: data.index[i]
  }));
  const holdingsByDate = data.dates.map((date, i) => ({
    date,
    ...data.tokens.reduce((acc, t, j) => {
      acc[t.symbol] = data.weightsByAsset[j][i];
      return acc;
    }, {})
  }));
  return { indexByDate, holdingsByDate, tokens: data.tokens };
};
