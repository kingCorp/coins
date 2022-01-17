/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, { useEffect } from 'react';
import { Text, Center, Heading, NativeBaseProvider, VStack } from 'native-base';
import { ActivityIndicator, Image } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParams } from '../../navigation/homeNav';
import { fetchCoin } from '../../queries/coins';
import { useQuery, useQueryClient } from 'react-query';
import styles from './styles';

type Props = NativeStackScreenProps<RootStackParams, 'Detail'>;

const Details: React.FC<Props> = ({ route }) => {
  const queryClient = useQueryClient();

  const { data, isError, isLoading, isSuccess } = useQuery('coin', () =>
    fetchCoin(route.params.id),
  );

  useEffect(() => {
    queryClient.resetQueries('coin', { exact: true });
  }, []);

  console.log(data?.data, isError, isLoading, isSuccess);

  return (
    <NativeBaseProvider>
      <Center _dark={{ bg: 'blueGray.900' }} _light={{ bg: 'blueGray.50' }} px={4} flex={3}>
        <VStack space={1} alignItems="center">
          {isLoading ? (
            <ActivityIndicator />
          ) : (
            <>
              <Image
                style={styles.logo}
                resizeMode="contain"
                source={{
                  uri: data?.data?.image.large,
                }}
              />
              <Heading size="lg">{route.params.name}</Heading>
              <Text>
                coin: <Text style={{ fontWeight: 'bold' }}>{data?.data?.name}</Text>
              </Text>
              <Text>
                category: <Text style={{ fontWeight: 'bold' }}>{data?.data?.categories[0]}</Text>
              </Text>
              <Text>
                rank: <Text style={{ fontWeight: 'bold' }}>{data?.data?.coingecko_rank}</Text>
              </Text>
              <Text>
                score: <Text style={{ fontWeight: 'bold' }}>{data?.data?.coingecko_score}</Text>
              </Text>
            </>
          )}
        </VStack>
      </Center>
    </NativeBaseProvider>
  );
};
export default Details;
