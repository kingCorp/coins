import { StatusBar, StyleSheet } from 'react-native';

export default StyleSheet.create({
  item: {
    backgroundColor: '#e2e2e2',
    padding: 15,
    marginVertical: 10,
    marginHorizontal: 10,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: 10,
  },
  title: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#000000',
    width: '80%',
    paddingLeft: 5,
  },
  symbol: {
    fontSize: 10,
    color: '#000000',
    width: '15%',
  },
  logo: {
    width: 25,
    height: 25,
  },
});
