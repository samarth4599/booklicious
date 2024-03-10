/* eslint-disable react-native/no-inline-styles */
import {useNavigation} from '@react-navigation/native';
import React, {memo, useCallback, useMemo, useState} from 'react';
import {ActivityIndicator, Pressable, Text, View} from 'react-native';
import FastImage from 'react-native-fast-image';
import {EScreenState} from '../../types/enums';
import {END_POINTS} from '../../utility/endpoints';
import {ICardProps} from './interface';
import styles from './styles';
import {err} from 'react-native-svg';

/**
 * Renders a card component for displaying book information.
 * @param item - The book item to display.
 * @param horizontal - Indicates whether the card should be displayed horizontally. Default is false.
 */

const Card: React.FC<ICardProps> = ({item, horizontal = false}) => {
  const [state, setState] = useState<EScreenState>(EScreenState.LOADING);
  const navigation = useNavigation();
  const {author_name, title, first_publish_year, cover_edition_key} = item;

  // fallback states for the image loading and error states
  const fallback = useMemo(() => {
    switch (state) {
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
  }, [state]);

  const onCardPress = useCallback(() => {
    navigation.navigate('Details', {item});
  }, [navigation, item]);

  return (
    <Pressable onPress={onCardPress} style={styles.card}>
      <View
        style={[
          styles.cardImageContainer,
          {
            width: horizontal ? 200 : '100%',
            marginBottom: horizontal ? 0 : 8,
            marginRight: horizontal ? 8 : 0,
          },
        ]}>
        <FastImage
          fallback={true}
          onError={() => setState(EScreenState.ERROR)}
          onLoadEnd={() => setState(EScreenState.SUCCESS)}
          onLoadStart={() => setState(EScreenState.LOADING)}
          source={{uri: END_POINTS.getImage(cover_edition_key ?? '', 'M')}}
          style={[
            styles.cardImage,
            {
              width: horizontal ? 200 : '100%',
            },
          ]}
          resizeMode={FastImage.resizeMode.contain}
        />
        {fallback}
      </View>
      <Text style={styles.cardTitle}>{title}</Text>
      <View style={styles.cardContent}>
        <Text style={styles.cardDate}>{first_publish_year}</Text>
        <Text style={styles.cardAuthor}>{author_name?.at(0) ?? ''}</Text>
      </View>
    </Pressable>
  );
};

export default memo(Card);
