import { API_URL } from 'config';
import { tokenIconURL } from 'token-icons';

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
  const tokens = data.tokens.map(t => ({
    ...t,
    iconURL: tokenIconURL(t.address)
  }));
  return { indexByDate, holdingsByDate, tokens };
};
