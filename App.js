/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  StatusBar,
  Text,
  FlatList,
} from 'react-native';
import {useQuery} from '@apollo/client';

import Header from './components/Header';
import Card from './components/Card';
import {GET_ALL_USERS} from './graphql/queries/getAllUsers';
import {Colors, Spacing} from './styles';
import CustomSpinner from './components/CustomSpinner';

const App = () => {
  const {loading, error, data} = useQuery(GET_ALL_USERS);

  return (
    <>
      <StatusBar backgroundColor={Colors.gray} />
      <SafeAreaView>
        {error && <Text>Error: {error}</Text>}

        <CustomSpinner visible={loading} />
        <Header />
        <View style={styles.cardContainer}>
          <FlatList
            data={data?.users.data}
            renderItem={({item}) => <Card item={item} />}
            keyExtractor={(item) => item.id}
          />
        </View>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  cardContainer: {margin: Spacing.large},
});

export default App;
