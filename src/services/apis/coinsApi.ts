import ApiHandler from '../apiHandler';

export default {
  coins: () => ApiHandler.get(`coins/list`),
  coin: (id: string) => ApiHandler.get(`coins/${id}`),
  searchCoin: (text: string) => ApiHandler.get(`search?query=${text}`),
  trendCoin: () => ApiHandler.get(`search/trending`),
};
