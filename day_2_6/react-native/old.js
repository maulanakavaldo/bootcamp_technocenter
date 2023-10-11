import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Image, Button, TouchableOpacity } from 'react-native';

export default function App() {
  const [ name, setName ] = useState("");
  const [ counter, setCounter ] = useState(0);

  return (
    <View style={styles.container}>
      {/* FLEX BOX */}
      <View style={{ 
        display: "flex", 
        flexDirection: "row",
        alignItems: "center", // horizontal
        justifyContent: "center", // vertical 
      }}>
        {/* SATU */}
        <View>
          {/* bisa ditambagkan style={{ flex: 1 }} */}
          <Image
            style={styles.logo}
            source={require('./assets/logo.png')}
            resizeMode="cover"
          />
        </View>
        {/* DUA */}
        <View>
          <Image
            style={styles.logo}
            source={require('./assets/saber.jpg')}
            resizeMode="cover"
          />
        </View>
      </View>
      {/* FLEX  */}

      <Text>Idk what im doing rn</Text>
      <Text>btw, i made this counter just click the button</Text>
      <Text> { counter } </Text>
      <View>
        <Text>Hello, there !</Text>
        <Text style={{ 
          textAlign: "center",
          fontWeight: "bold",
        }}>{ name }</Text>
      </View>
      <TextInput style={{
        borderWidth: 1,
        width: 100,
        margin: 10,
      }}
      onChangeText={(text) => setName(text)} 
      />
      <Button title={"Click Me"} onPress={() => {
        setCounter(counter + 1);
      }}/>

      <TextData data={ "So uhh.. i came from props btw" } dataNumber={ counter } decrement={(minus) => setCounter(minus) }/>

      <ClassComponent dataProbs={ "Yep... im from class component" }/>
      
      <StatusBar style="auto" />
    </View>
  );
}

const TextData = ({ data, decrement, dataNumber }) => {
  return (
    <View style={{ backgroundColor: "black", margin: 10, padding: 5}}>
      <Text style={ styles.textTrial }> Ini Functional Component </Text>
      <Text style={ styles.textTrial }>{ data }</Text>
      <TouchableOpacity
        onPress={() => decrement(dataNumber - 1)}
      >
        <Text style={ styles.textTrial }> So uh... im enough with this number decrease it </Text>
      </TouchableOpacity>
    </View>
  )
};

class ClassComponent extends React.Component {
  render() {
    return (
      <View style={{ backgroundColor: "black", padding: 5 }}>
        <Text style={ styles.textTrial }> Ini Class Component </Text>
        <Text style={ styles.textTrial }> { this.props.dataProbs } </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 100,
    height: 100,
  },
  textTrial: {
    color: "#FFF",
    textAlign: "center"
  }
});
