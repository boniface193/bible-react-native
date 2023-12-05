import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {View, StyleSheet, SafeAreaView, Text} from 'react-native';

export default function App() {
  return (
    <NavigationContainer>
      <SafeAreaView>
        <View style={styles.sectionContainer}>
          <Text>App Testing</Text>
        </View>
      </SafeAreaView>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
