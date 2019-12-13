import React from 'react';
import {  View, Text, FlatList, Linking, TouchableOpacity, ScrollView, Image } from 'react-native';
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
      year : navigation.getParam('year'),
      genre : navigation.getParam('genre'),
      showtimes : navigation.getParam('showtimes'),
      cinemaId: navigation.getParam('cinemaId'),
      omdb: navigation.getParam('omdb'),
    }
  }

  getGenres(){
    let genreslist = [];
    for (let i = 0; i < this.state.genre.length; i++){
      genreslist.push(this.state.genre[i].Name , ' ');
    }
    return genreslist;
  }

  detailsTable() {
    let rows= [];
    let genres = this.getGenres();
    rows.push(['Title', this.state.name]);
    rows.push(['Plot', this.state.plot]);
    rows.push(['Duration', this.state.omdb[0].Runtime]);
    rows.push(['Release Date ', this.state.year]);
    rows.push(['Genres', genres]);
    return rows;


  }

  goToWebsite(url) {
		Linking.openURL('http://' + url)
  	.catch(err => console.log(err));
	}

  cinemaTable(showtimes) {
    const buying_link = (data) =>{
      return(
        <TouchableOpacity onPress={() => this.goToWebsite(data[1])}>
          <View>
            <Text>{data[0]}</Text>
          </View>
        </TouchableOpacity>
      )
    };

    let rows= [];
    for(let i = 0; i< showtimes.length; i++) {
      let times = [];
      if(showtimes[i].cinema.id == this.state.cinemaId){
        for(let j = 0; j< showtimes[i].schedule.length; j++) {
              times.push(buying_link(showtimes[i].schedule[j].time ,showtimes[i].schedule[j].purchase_url));
        }
        rows.push(showtimes[i].cinema.name , times );
      }
    }
    return rows;
  }


  render() {
    const { navigation } = this.props;
    return(
      <ScrollView>
        <Image
          style={ styles.poster }
          resizeMode='cover'
          source={{uri: this.state.poster}}
        />
        <Text style= {styles.Text}>  {this.state.name}  </Text>
        <Table style= {styles.table} borderstyle = {styles.borderStyle}>
          <Row data={[]} style={styles.head} textStyle={styles.text}/>
          <Rows data={this.detailsTable()} textStyle={styles.text}/>
        </Table>
        <Table  style={styles.table}>
          <Row data={[]} style={styles.head} textStyle={styles.text}/>
          <Row data={this.cinemaTable(this.state.showtimes)} textStyle={styles.text}/>
        </Table>
      </ScrollView>
    );
  }
}

export default Movie;
