import coinsApi from '../services/apis/coinsApi';

export const fetchCoins = async () => {
  const res = await coinsApi.coins();
  return res;
};

export const fetchCoin = async (id: string) => {
  const res = await coinsApi.coin(id);
  return res;
};

export const SearchCoins = async (text: string) => {
  const res = await coinsApi.searchCoin(text);
  return res;
};

export const trendCoins = async () => {
  const res = await coinsApi.trendCoin();
  return res;
};
