import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Vibration } from 'react-native';
import { Fingerprint } from 'expo'

export default class App extends React.Component {
  componentDidMount(){
    Fingerprint.hasHardwareAsync().then(response=>{
      console.log("hasHardwareAsync response::"+response)
    }).catch(err=>console.log("hasHardwareAsync err::"+err))

    Fingerprint.isEnrolledAsync().then(response=>{
      console.log("isEnrolledAsync response::"+response)
    }).catch(err=>console.log("isEnrolledAsync err::"+err))

  }

  executeFingerId=()=>{
    Fingerprint.authenticateAsync().then(response=>{
      console.log("authenticateAsync response::"+response)
      Vibration.vibrate()
      if(response.success){
        alert('Authenticated')
      } else {
        alert('Failed to authenticated')
      }
    }).catch(err=>console.log("authenticateAsync err::"+err))
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Fingerprint App!</Text>
        <TouchableOpacity onPress={this.executeFingerId}>
          <Text>Click me, then authenticate with your finger.</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
