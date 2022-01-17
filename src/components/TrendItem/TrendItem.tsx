import React from 'react';
import { Image, Text, View } from 'react-native';
import styles from './styles';

export type Item = {
  name: string;
  symbol: string;
  price_btc: number;
  id: string;
};

type Props = {
  item: Item;
  url?: string;
};
const TrendItem: React.FC<Props> = ({ item, url }) => {
  return (
    <View style={styles.item}>
      {url && (
        <Image
          style={styles.logo}
          resizeMode="contain"
          source={{
            uri: url,
          }}
        />
      )}
      <Text style={styles.title}>{item.name.slice(0, 30)}</Text>
      <Text style={styles.symbol}>{item.symbol.slice(0, 10)}</Text>
      <Text style={styles.price}>{item.price_btc.toFixed(6)}</Text>
    </View>
  );
};

export default TrendItem;
