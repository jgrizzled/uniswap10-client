import { API_URL } from 'config';

export default async function fetchIndexData({
  currency,
  rebalancePeriod,
  liquidityWeight,
}) {
  const response = await fetch(
    `${API_URL}/api/index?c=${currency}&rp=${rebalancePeriod}&lw=${liquidityWeight}`
  );
  const data = await response.json();
  if (data.error) throw new Error(data.error);
  const indexByDate = data.dates.map((date, i) => ({
    date,
    index: Number(data.index[i]),
  }));
  const holdingsByDate = data.dates.map((date, i) => ({
    date,
    ...data.tokens.reduce((acc, t, j) => {
      acc[t.symbol] = data.weightsByAsset[j][i];
      return acc;
    }, {}),
  }));
  return { indexByDate, holdingsByDate, tokens: data.tokens };
}
