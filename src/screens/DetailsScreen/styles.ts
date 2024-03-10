import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F6F6F6',
    marginTop: 20,
  },
  cardImageContainer: {
    borderRadius: 8,
    height: 350,
    width: '100%',
    marginBottom: 16,
  },
  cardImage: {
    borderRadius: 8,
    height: 350,
    width: '100%',
  },
  loader: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  error: {
    position: 'absolute',
    top: 160,
    left: 0,
    right: 0,
    textAlign: 'center',
    fontWeight: '600',
    color: 'gray',
  },
  shadow: {
    shadowColor: '#000',
    shadowOffset: {width: 4, height: 8},
    shadowOpacity: 0.4,
    shadowRadius: 4,
    elevation: 3,
    marginTop: 8,
    marginBottom: 1,
    height: 1,
    width: '92%',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  cardContent: {
    flex: 1,
    backgroundColor: '#fff',
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
  },
  cardTitle: {
    fontSize: 24,
    fontWeight: '800',
    marginTop: 16,
    textAlign: 'center',
    color: '#000',
  },
  row: {
    flexDirection: 'row',
    marginTop: 16,
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    alignItems: 'center',
  },
  author: {
    fontSize: 18,
    fontWeight: '600',
    color: '#C5C9D3',
  },
  year: {
    fontSize: 18,
    fontWeight: '600',
    color: '#C5C9D3',
  },
  description: {
    fontSize: 16,
    fontWeight: '400',
    color: '#24203F',
    margin: 16,
    flex: 1,
  },
  save: {position: 'absolute', right: 30, bottom: 120},
});

export default styles;
