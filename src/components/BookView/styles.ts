import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: {width: 2, height: 4},
    shadowOpacity: 0.4,
    shadowRadius: 4,
    elevation: 3,
    margin: 16,
    padding: 16,
  },
  cardImageContainer: {
    borderRadius: 8,
    height: 200,
  },
  cardImage: {
    borderRadius: 8,
    height: 200,
  },
  cardContent: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 12,
    marginBottom: 16,
  },
  cardDate: {
    fontSize: 14,
    marginBottom: 4,
  },
  cardAuthor: {
    fontSize: 14,
    fontWeight: 'bold',
    color: 'gray',
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
    top: 80,
    left: 0,
    right: 0,
    textAlign: 'center',
    fontWeight: '600',
    color: 'gray',
  },
});

export default styles;
