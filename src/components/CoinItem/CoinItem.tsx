import React from 'react';
import { Image, Text, TouchableOpacity } from 'react-native';
import styles from './styles';

export type Item = {
  name: string;
  symbol: string;
  id: string;
};

type Props = {
  item: Item;
  onPress: () => void;
  url?: string;
};
const CoinItem: React.FC<Props> = ({ item, onPress, url }) => {
  return (
    <TouchableOpacity style={styles.item} onPress={onPress}>
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
    </TouchableOpacity>
  );
};

export default CoinItem;
