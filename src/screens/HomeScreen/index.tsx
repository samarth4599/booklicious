import React from 'react';
import {View, Text} from 'react-native';
import styles from './styles';

const HomeScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to Booklicious!</Text>
      {/* Add your book store content here */}
    </View>
  );
};

export default HomeScreen;
