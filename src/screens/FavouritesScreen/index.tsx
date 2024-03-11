import React, {useCallback, useMemo} from 'react';
import {FlatList, ListRenderItemInfo, Text, View} from 'react-native';
import BookView from '../../components/BookView';
import {useBooks} from '../../contexts/BookContextProvider';
import {CONSTANTS} from '../../types/enums';
import {IBook} from '../../types/interfaces';
import styles from './styles';

/**
 * FavouritesScreen component.
 * Renders a screen that displays a list of favourite books.
 */
const FavouritesScreen: React.FC = () => {
  const {favourites} = useBooks();

  /**
   * Renders each item in the FlatList.
   * @param item - The book item to render.
   */
  const renderItem = useCallback(({item}: ListRenderItemInfo<IBook>) => {
    return <BookView item={item} />;
  }, []);

  const listEmptyComponent = useMemo(() => {
    return (
      <View style={styles.emptyContainer}>
        <Text style={styles.emptyText}>No favourite books found.</Text>
      </View>
    );
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={favourites}
        ListEmptyComponent={listEmptyComponent}
        renderItem={renderItem}
        keyExtractor={(item, index) => item.title + index}
        getItemLayout={(_data, index) => ({
          length: CONSTANTS.ITEM_HEIGHT as number,
          offset: CONSTANTS.ITEM_HEIGHT * index,
          index,
        })}
      />
    </View>
  );
};

export default FavouritesScreen;
