import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  itemContainer: {
    height: 100,
    width: '100%',
    borderColor: 'gray',
    borderWidth: 1,
    flexDirection: 'row',
  },
  leftContainer: {
    // backgroundColor: 'red',
    width: 100,
  },
  rightContainer: {
    // backgroundColor: 'blue',
    flex: 1,
    flexDirection: 'column',
    padding: 10,
    justifyContent: 'space-between',
  },
  text: {
    fontSize: 16,
  },
  subText: {
    fontSize: 12,
    color: 'gray',
  },
});

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.itemContainer}>
        <View style={styles.leftContainer}>
          <Image
            style={{ width: 100, height: 100 }}
            source={{
              // uri: 'https://reactnative.dev/img/tiny_logo.png',
              uri: 'https://picsum.photos/id/10/200/300/',
            }}
          />
        </View>
        <View style={styles.rightContainer}>
          <Text numberOfLines={3} styel={styles.text}>
            Used to truncate the text with an ellipsis after computing the text
            layout, including line wrapping, such that the total number of lines
            does not exceed this number.
          </Text>
          <Text style={styles.subText}>ReactNews</Text>
        </View>
      </View>
    </View>
  );
}
