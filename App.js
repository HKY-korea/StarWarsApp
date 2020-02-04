import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  FlatList,
  TouchableHighlight
} from 'react-native';

import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack'; 

import People from './People';
import Container from './Container';

const links = [
  { title: 'People' },
  { title: 'Films' },
  { title: 'StarShips' },
  { title: 'Vehicles' },
  { title: 'Species' },
  { title: 'Planets' }
]

class StarWars extends Component {
  static navigationOptions = {
    headerTitle: () => <Text style={{fontSize: 34, color: 'rgb(255, 232, 31)'}}>StarWars</Text>,
    headerStyle: { backgroundColor: '#000', height: 110 }
  }

  navigate = (link) => {
    const { navigate } = this.props.navigation
    navigate(link)
  }

  renderItem = ({ item, index }) => {
    return (
      <TouchableHighlight
        onPress={() => this.navigate(item.title)}
        style={[styles.item, { borderTopWidth: index === 0 ? 1 : null }]}>
        <Text style={styles.text}>{item.title}</Text>
      </TouchableHighlight>
    )
  }

  render() {
    return (
      <Container>
        <FlatList
          data={links}
          keyExtractor={(item) => item.title}
          renderItem={this.renderItem} />
      </Container>
    )
  }
}

const styles = StyleSheet.create({
  item: {
    padding: 20,
    justifyContent: 'center',
    borderColor: 'rgba(255, 232, 31, .2)',
    borderBottomWidth: 1
  },
  text: {
    color: '#FFE81F',
    fontSize: 18
  }
});

const App = createStackNavigator({
  Home: {
    screen: StarWars
  },
  People: {
    screen: People
  }
})


export default createAppContainer(App);