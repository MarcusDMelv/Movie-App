import React, {PureComponent} from 'react';
import {StyleSheet, View, TouchableOpacity, Image, Text} from 'react-native';
const placeholderImage = require('../assets/images/placeholder.png');
import PropTypes from 'prop-types';
import { NavigationContainer } from '@react-navigation/native';

const propTypes = {
  item: PropTypes.object,
};
class Card extends PureComponent {
  render() {
    const {navigation, item} = this.props;
    return (
      <TouchableOpacity onPress= {() => navigation.navigate('Detail',{movieDetail: item})} style={styles.container} >
        <Image
          resizeMode="cover"
          style={styles.imageStyle}
          source={
            item.poster_path
              ? {uri: 'https://image.tmdb.org/t/p/w500' + item.poster_path}
              : placeholderImage
          }
        />
        {item.poster_hold && <Text style={styles.movieName}>{item.title}</Text>}
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 5,
    position: 'relative',
    alignItems: 'center',
    height: 200,
  },
  imageStyle: {
    height: 200,
    width: 120,
    borderRadius: 20,
  },
  movieName: {
    position: 'absolute',
    width: 100,
    textAlign: 'center',
    top: 10,
  },
});

Card.propTypes;
export default Card;
