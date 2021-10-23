import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider as PaperProvider, Appbar, Button } from 'react-native-paper';

export default function App() {
  return (
    <PaperProvider>
      <Appbar.Header>
      <Appbar.BackAction onPress={() => {}} />
        <Appbar.Content title="Mobile World" />
        <Appbar.Action icon="delete" onPress={() => alert('Delete')} />
        <Appbar.Action icon="map-marker" onPress={() => alert('GPS')} />
      </Appbar.Header>

      <Text style={styles.text}>Hello Brother</Text>
    
      <Button icon="cursor-default" mode="contained" style={styles.button} onPress={() => alert('Insert')}>
        Click Me
      </Button>

      <Button icon="camera" mode="contained" style={{margin:20}} onPress={() => alert('Camera')}>
        Press Me
      </Button>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  text: {
    margin: 20,
    fontSize: 30
  },
  button: {
    margin: 20
  },
});