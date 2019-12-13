import React from 'react';
import {  View, ScrollView, Text, FlatList, TouchableOpacity } from 'react-native';
import Header from '../Header/Header';
import { getMovies } from '../../services/apiService';
import styles from './styles.js';
import { Table, Row, Rows } from 'react-native-table-component';

class Movie extends React.Component {
  constructor(props) {
    super(props);
		const { navigation } = this.props;
    this.state = {
      id: navigation.getParam('id'),
      name: navigation.getParam('name'),
      address: navigation.getParam('address'),
      poster: navigation.getParam('poster'),
      plot: navigation.getParam('plot'),
      duration : navigation.getParam('duration'),
      year : navigation.getParam('year'),
      gemre : navigation.getParam('genre'),
      showtimes : navigation.getParam('showtimes'),
    }
  }

  detailsTable() {
    let rows= [];
    rows.push(['Title', this.state.name]);
    rows.push(['Plot', this.state.plot]);
    rows.push(['Duration', this.state.duration]);
    rows.push(['Release Date ', this.state.year]);
    rows.push(['Genres', this.state.genre]);
    return rows;


  }

  cinemaTable(showtimes) {

    let rows= [];
    for(let i = 0; i< showtimes.length; i++) {
      //let length = showtimes[i].schedule.length;
      //let times = [];
      //  for(let j = 0; j< length; i++) {
      //    times.push('this');
      //  }
        rows.push([showtimes[i].cinema.name, 'times']);
    }
    return rows;
  }

  render() {
    const { navigation } = this.props;
    return(
      <ScrollView>
        <Text style= {styles.Text}>  {this.state.name}  </Text>
        <Table borderStyle={{borderWidth: 2, borderColor: '#c8e1ff'}}>
          <Row data={[]} style={styles.head} textStyle={styles.text}/>
          <Rows data={this.detailsTable()} textStyle={styles.text}/>
        </Table>
        <Table borderStyle={{borderWidth: 2, borderColor: '#c8e1ff'}}>
          <Row data={[]} style={styles.head} textStyle={styles.text}/>
          <Rows data={this.cinemaTable(this.state.showtimes)} textStyle={styles.text}/>
        </Table>
      </ScrollView>
    );
  }
}

export default Movie;
