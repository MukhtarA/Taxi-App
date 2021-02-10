import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    padding: 10,
    height: '100%',
  },
  textInput: {
    backgroundColor: '#e2e0e0',
    padding: 10,
    marginVertical: 5,
    marginLeft: 20,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  iconContainer: {
    backgroundColor: '#c1c0c0',
    padding: 5,
    borderRadius: 50,
    marginRight: 15,
  },
  locationText: {},
  separator: {
    backgroundColor: '#e0e0e0',
    height: 1,
  },
  listView: {
    position: 'absolute',
    top: 105,
  },
  autoCompleteContainer: {
    position: 'absolute',
    top: 0,
    left: 10,
    right: 10,
  },
  circle: {
    width: 5,
    height: 5,
    borderRadius: 5,
    backgroundColor: 'black',
    position: 'absolute',
    top: 20,
    left: 15,
  },
  line: {
    width: 1,
    height: 40,
    backgroundColor: '#888888',
    position: 'absolute',
    top: 30,
    left: 16.5,
  },
  square: {
    width: 5,
    height: 5,
    backgroundColor: 'black',
    position: 'absolute',
    top: 75,
    left: 15,
  },
});

export default styles;
