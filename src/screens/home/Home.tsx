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
import { ActivityIndicator, FlatList, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { useQuery } from 'react-query';
import { fetchCoins, SearchCoins } from '../../queries/coins';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';
import { RootStackParams } from '../../navigation/homeNav';
import { NativeStackNavigationProp } from '@react-navigation/native-stack/lib/typescript/src/types';
import CoinItem from '../../components/CoinItem/CoinItem';

const Home = () => {
  const [page, setPage] = useState(15);
  const [searchValue, setSearchValue] = useState('');

  const navigation = useNavigation<NativeStackNavigationProp<RootStackParams>>();
  const { data, isLoading, isError, isSuccess, refetch } = useQuery('coins_search', () =>
    SearchCoins(searchValue),
  );

  const renderItem = ({ item }: any) => (
    <CoinItem
      item={item}
      onPress={() => navigation.navigate('Details', { name: item.name, id: item.id })}
      url={item.thumb}
    />
  );

  const handleEnd = async () => {
    setPage(page + 5);
  };

  const handleOnChange = async (text: string) => {
    setSearchValue(text);
    refetch();
  };

  return (
    <View style={styles.container}>
      <View style={styles.searchInput}>
        <TextInput
          style={{ color: '#000', padding: 10 }}
          placeholder="search coins"
          onChangeText={handleOnChange}
        />
      </View>
      <FlatList
        data={data?.data?.coins.slice(0, page)}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
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
export default Home;
