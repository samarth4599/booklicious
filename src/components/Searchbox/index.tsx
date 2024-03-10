import React, {memo, useCallback, useMemo, useRef, useState} from 'react';
import {
  FlatList,
  ListRenderItemInfo,
  Text,
  TextInput,
  View,
} from 'react-native';
import * as Icons from 'react-native-heroicons/solid';
import {useBooks} from '../../contexts/BookContextProvider';
import {HttpService} from '../../services/http.service';
import {EReqMethod, EScreenState} from '../../types/enums';
import {IBook} from '../../types/interfaces';
import {END_POINTS} from '../../utility/endpoints';
import BookView from '../BookView';
import ContentView from '../ContentView';
import styles from './styles';

/**
 * A search box component for searching eBooks.
 */
const Searchbox: React.FC = () => {
  const [searchValue, setSearchValue] = useState<string>('');
  const {results, setResults} = useBooks();
  const [state, setState] = useState<EScreenState>(EScreenState.SUCCESS);
  const timeout = useRef<NodeJS.Timeout | null>(null);

  /**
   * Handles the change in search text.
   * @param text - The new search text.
   */
  const handleSearchChange = useCallback((text: string) => {
    setSearchValue(text);
    // Throttle logic
    if (timeout.current) {
      clearTimeout(timeout.current);
    }
    if (text.length === 0) {
      setResults([]);
      setTimeout(() => setState(EScreenState.LOADING), 0);
      setTimeout(() => setState(EScreenState.SUCCESS), 0);
      return;
    }

    timeout.current = setTimeout(async () => {
      try {
        setState(EScreenState.LOADING);
        const response = await HttpService({
          method: EReqMethod.GET,
          url: END_POINTS.searchBook(text),
        });
        setResults(Array.from(new Set(response.docs))); // Remove duplicate elements
        setState(EScreenState.SUCCESS);
      } catch (error) {
        setState(EScreenState.ERROR);
      }
    }, 1000);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const icon = useMemo(
    () => (
      <Icons.MagnifyingGlassIcon
        color="#888"
        size={20}
        style={styles.searchIcon}
      />
    ),
    [],
  );
  const listHeader = useMemo(
    () =>
      results.length > 0 ? (
        <Text style={styles.listHeader}>Results</Text>
      ) : null,
    [results],
  );

  const renderItem = useCallback(({item}: ListRenderItemInfo<IBook>) => {
    return <BookView item={item} horizontal={true} />;
  }, []);

  return (
    <>
      {/* SearchBox */}
      <View style={styles.container}>
        {icon}
        <TextInput
          style={styles.input}
          placeholder="Search for eBooks..."
          placeholderTextColor="#888"
          value={searchValue}
          onChangeText={handleSearchChange}
        />
      </View>
      {/* Results */}
      <ContentView
        state={state}
        onRetry={() => handleSearchChange(searchValue)}>
        {listHeader}
        <FlatList
          data={results}
          horizontal={true}
          renderItem={renderItem}
          keyExtractor={(item, index) => item.title + index}
        />
      </ContentView>
    </>
  );
};

export default memo(Searchbox);
