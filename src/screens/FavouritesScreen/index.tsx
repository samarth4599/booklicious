import React from 'react';
import {ScrollView, View} from 'react-native';
import styles from './styles';

const FavouritesScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <ScrollView style={styles.scroll}></ScrollView>
    </View>
  );
};

export default FavouritesScreen;
