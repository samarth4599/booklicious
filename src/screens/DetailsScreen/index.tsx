import {RouteProp, useRoute} from '@react-navigation/native';
import React, {useCallback, useEffect, useMemo, useState} from 'react';
import {
  ActivityIndicator,
  ScrollView,
  Text,
  ToastAndroid,
  TouchableOpacity,
  View,
} from 'react-native';
import FastImage from 'react-native-fast-image';
import ContentView from '../../components/ContentView';
import {HttpService} from '../../services/http.service';
import {CONSTANTS, EReqMethod, EScreenState, ROUTES} from '../../types/enums';
import {TNavRoutes} from '../../types/types';
import {END_POINTS} from '../../utility/endpoints';
import styles from './styles';
import {HeartIcon} from 'react-native-heroicons/solid';
import {saveValueToStorage} from '../../services/storage.service';
import {useBooks} from '../../contexts/BookContextProvider';

/**
 * Details screen component.
 * This component displays the details of a book, including its cover image, title, author, publication year, and description.
 * Users can save or remove the book from their favorites list.
 * @component
 */
const DetailsScreen: React.FC = () => {
  const route = useRoute<RouteProp<TNavRoutes, ROUTES.DETAILS>>();
  const {favourites, setFavourites} = useBooks();
  const {
    cover_edition_key,
    title,
    author_name,
    first_publish_year,
    key,
    description: savedDescription,
  } = route.params.item;
  const [state, setState] = useState<EScreenState>(EScreenState.SUCCESS);
  const [description, setDescription] = useState<string>(
    savedDescription ?? '',
  );
  const [imageState, setImageState] = useState<EScreenState>(
    EScreenState.LOADING,
  );

  const isSaved = useMemo(
    () => favourites.find(item => item.key === key),
    [favourites, key],
  );

  const getDetails = useCallback(async () => {
    setState(EScreenState.LOADING);
    try {
      // Handle the response here
      const response = await HttpService({
        method: EReqMethod.GET,
        url: END_POINTS.getDetails(key ?? ''),
      });
      setState(EScreenState.SUCCESS);
      setDescription(response?.description?.value ?? 'No Description');
    } catch (error) {
      // Handle the error here
      setState(EScreenState.ERROR);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (!isSaved) {
      getDetails();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onSavePress = useCallback(async () => {
    try {
      if (isSaved) {
        // Remove the book from the storage
        const newFavourites = favourites.filter(item => item.key !== key);
        setFavourites(newFavourites);
        await saveValueToStorage(CONSTANTS.SAVED_BOOKS, newFavourites);
        ToastAndroid.show('Removed from favourites !', ToastAndroid.SHORT);
      } else {
        // Save the book to the storage
        const newFavourites = [
          ...favourites,
          {...route.params.item, description},
        ];
        await saveValueToStorage(CONSTANTS.SAVED_BOOKS, newFavourites);
        setFavourites(newFavourites);
        ToastAndroid.show('Added to favourites !', ToastAndroid.SHORT);
      }
    } catch (error) {
      ToastAndroid.show(CONSTANTS.GENERIC_ERR_MSG, ToastAndroid.SHORT);
    }
  }, [description, favourites, isSaved, key, route.params.item, setFavourites]);

  const saveBookIcon = useMemo(
    () => (
      <TouchableOpacity onPress={onSavePress}>
        <HeartIcon
          style={styles.save}
          size={40}
          color={isSaved ? 'red' : 'gray'}
        />
      </TouchableOpacity>
    ),
    [onSavePress, isSaved],
  );

  // fallback states for the image loading and error states
  const fallback = useMemo(() => {
    switch (imageState) {
      case EScreenState.LOADING:
        return (
          <ActivityIndicator
            size={'large'}
            color={'#000'}
            style={styles.loader}
          />
        );
      case EScreenState.ERROR:
        return <Text style={styles.error}>No Image Available</Text>;
      case EScreenState.SUCCESS:
        return null;

      default:
        return null;
    }
  }, [imageState]);

  const image = useMemo(
    () => (
      <View style={[styles.cardImageContainer]}>
        <FastImage
          fallback={true}
          onError={() => setImageState(EScreenState.ERROR)}
          onLoadEnd={() => setImageState(EScreenState.SUCCESS)}
          onLoadStart={() => setImageState(EScreenState.LOADING)}
          source={{
            uri: END_POINTS.getImage(cover_edition_key ?? '', 'M'),
            priority: FastImage.priority.high,
          }}
          style={[styles.cardImage]}
          resizeMode={FastImage.resizeMode.contain}
        />
        {fallback}
        {saveBookIcon}
      </View>
    ),
    [cover_edition_key, fallback, saveBookIcon],
  );

  return (
    <View style={styles.container}>
      {image}
      <View style={styles.shadow} />
      <ScrollView style={styles.cardContent}>
        <Text style={styles.cardTitle}>{title}</Text>
        <View style={styles.row}>
          <Text style={styles.author}>{author_name}</Text>
          <Text style={styles.year}>{first_publish_year}</Text>
        </View>
        <Text style={styles.description}>{description}</Text>
        <ContentView state={state} onRetry={getDetails}>
          <></>
        </ContentView>
      </ScrollView>
    </View>
  );
};

export default DetailsScreen;
