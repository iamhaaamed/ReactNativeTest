import React from 'react';
import {Image, View, Text, StyleSheet} from 'react-native';
import {Spacing} from '../../styles';

export default ({item}) => {
  return (
    <View style={styles.card}>
      <Image
        style={styles.image}
        source={{uri: item.albums.data[0].photos.data[0].url}}
      />

      <View style={styles.textContainer}>
        <Text>{item.username}</Text>
        <Text>{item.name}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  textContainer: {alignItems: 'flex-end'},
  card: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: Spacing.small,
    padding: Spacing.large,
    borderRadius: 4,
    elevation: 2,
  },
  image: {
    width: 100,
    height: 100,
  },
});
