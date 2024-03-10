import React, {useCallback, useEffect, useMemo, useState} from 'react';
import {FlatList, ListRenderItemInfo, Text, View} from 'react-native';
import BookView from '../../components/BookView';
import ContentView from '../../components/ContentView';
import Searchbox from '../../components/Searchbox';
import {useBooks} from '../../contexts/BookContextProvider';
import {HttpService} from '../../services/http.service';
import {CONSTANTS, EReqMethod, EScreenState} from '../../types/enums';
import {IBook} from '../../types/interfaces';
import {END_POINTS} from '../../utility/endpoints';
import styles from './styles';

/**
 * Represents the Home screen component.
 * This component displays a list of trending books and a search box.
 */

const HomeScreen: React.FC = () => {
  const [state, setState] = useState<EScreenState>(EScreenState.SUCCESS);
  const {setBooks, books} = useBooks();

  const getBooks = useCallback(async () => {
    setState(EScreenState.LOADING);
    try {
      // Handle the response here
      const response = await HttpService({
        method: EReqMethod.GET,
        url: END_POINTS.trending,
      });
      setBooks(
        Array.from(new Set(response.works)).map((item: any) => ({
          author_name: item.author_name,
          title: item.title,
          cover_edition_key: item.cover_edition_key,
          key: item.key,
          first_publish_year: item.first_publish_year,
        })),
      ); // Remove duplicate elements
      setState(EScreenState.SUCCESS);
    } catch (error) {
      // Handle the error here
      setState(EScreenState.ERROR);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const renderItem = useCallback(({item}: ListRenderItemInfo<IBook>) => {
    return <BookView item={item} />;
  }, []);

  useEffect(() => {
    getBooks();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const listHeader = useMemo(
    () => <Text style={styles.listHeader}>Trending Books</Text>,
    [],
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Searchbox />
      </View>
      <ContentView state={state} onRetry={getBooks}>
        <FlatList
          data={books}
          renderItem={renderItem}
          ListHeaderComponent={listHeader}
          keyExtractor={(item, index) => item.title + index}
          getItemLayout={(_data, index) => ({
            length: CONSTANTS.ITEM_HEIGHT as number,
            offset: CONSTANTS.ITEM_HEIGHT * index,
            index,
          })}
        />
      </ContentView>
    </View>
  );
};

export default HomeScreen;
