import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { WebView } from 'react-native-webview';

class App extends Component {
  constructor() {
    super();
    this.state = {
      cardList: [{id: 1, title: 'this'}, {id: 2, title: 'that'}]
    }
    this.webview_ref = React.createRef();
  }

  renderCards = ({cl, i}) => {
    return (
      <View key={i}>
        <TouchableOpacity onPress={() => this.removeCard(i)}>
          <Text>{`${i} ${cl.title}`}</Text>
        </TouchableOpacity>
      </View>
    )
  }

  addCard = (props) => {
    this.setState(prevState => ({
      ...prevState,
      cardList: [...prevState.cardList, ...props]
    }))
  }

  removeCard = (i) => {
    console.log(i, '<><>i><><>')
    this.setState(prevState => ({
      ...prevState,
      cardList: [...this.state.cardList.filter(cl => cl.id !== i)]
    }))
  }

  render() {
    return (
      <View style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
        {this.state.cardList.length > 0 && this.state.cardList.map(cl => this.renderCards({cl, i: cl.id}))}
        <TouchableOpacity
          onPress={() => this.addCard([{id: 999 + Math.floor(Math.random() * 99999), title: 'empty'}])}
          style={{
            alignItems: 'center',
            width: 100,
            borderWidth: 1,
            marginBottom: 15
          }}
        >
          <Text>Add Card</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  navBar: {
    position: 'absolute',
    top: 0,
    height: "10.5%",
    width: '100%',
    backgroundColor: '#ccc'
  }
});

export default App;
