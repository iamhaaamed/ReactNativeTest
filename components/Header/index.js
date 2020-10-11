import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Colors, Spacing} from '../../styles';

export default function index() {
  return (
    <View style={styles.headerContainer}>
      <Text style={styles.headerText}>Users</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  headerContainer: {backgroundColor: Colors.gray, padding: Spacing.small},
  headerText: {fontSize: Spacing.large},
});
