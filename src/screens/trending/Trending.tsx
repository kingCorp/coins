/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, { useState } from 'react';
import { ActivityIndicator, FlatList, Text, View } from 'react-native';
import { useQuery } from 'react-query';
import { trendCoins } from '../../queries/coins';
import styles from './styles';
import TrendItem from '../../components/TrendItem/TrendItem';

const Trending = () => {
  const [page, setPage] = useState(15);
  const { data, isError, isLoading, isSuccess, refetch } = useQuery('trends', trendCoins);

  const renderItem = ({ item }: any) => (
    <TrendItem
      item={item.item}
      url={item.item.small}
    />
  );

  const handleEnd = async () => {
    setPage(page + 5);
  };
  return (
    <View>
      <FlatList
        data={data?.data.coins}
        renderItem={renderItem}
        keyExtractor={(item) => item.item.id}
        refreshing={isLoading}
        onRefresh={refetch}
        onEndReachedThreshold={0.5}
        onEndReached={() => handleEnd()}
        ListEmptyComponent={
          <View style={styles.emptyCont}>
            {isError && <Text>An Error occurred. Please swipe down to retry</Text>}
            {isLoading && <Text>We are checking for latest coins updates</Text>}
            {isSuccess && data?.data.length === 0 && <Text>No Coin in the Market today</Text>}
          </View>
        }
        ListFooterComponent={() => (isLoading ? <ActivityIndicator color="#0073b7" /> : null)}
      />
    </View>
  );
};
export default Trending;
