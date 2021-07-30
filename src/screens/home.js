import React, {useEffect, useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Dimensions,
  FlatList,
  ScrollView,
  ActivityIndicator,
} from 'react-native';
//TODO import slider
import {SliderBox} from 'react-native-image-slider-box';
import {
  getPopularMovies,
  getUpcomingMovies,
  getPopularTv,
  getFamilyMovies,
  getDocumentries,
} from '../api/api_list';
// TODO import components from list
import Component_list from '../components/component_list';
import Error from '../components/error'

const dimensions = Dimensions.get('screen');
const Home = ({navigation}) => {
  console.log(dimensions);
  const {sliderStyle, sliderDots, carousel} = styles;
  const [popularMovies, setPopularMovies] = useState('');
  const [popularTv, setPopularTv] = useState('');
  const [familyMovies, setFamilyMovies] = useState('');
  const [movieImages, setMovieImages] = useState('');
  const [documentries, setDocumentries] = useState('');
  const [error, setError] = useState(false);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    getUpcomingMovies()
      .then(movies => {
        const movieImagesArray = [];
        movies.forEach(movie => {
          movieImagesArray.push(
            'https://image.tmdb.org/t/p/w500' + movie.poster_path,
          );
        });

        setMovieImages(movieImagesArray);
        setLoaded(true);
      })
      .catch(err => {
        setError(err);
      });

    getPopularMovies()
      .then(movies => {
        setPopularMovies(movies);
      })
      .catch(err => {
        setError(err);
      });

    getPopularTv()
      .then(movies => {
        setPopularTv(movies);
      })
      .catch(err => {
        setError(err);
      });

    getFamilyMovies()
      .then(movies => {
        setFamilyMovies(movies);
      })
      .catch(err => {
        setError(err);
      });

    getDocumentries()
      .then(movies => {
        setDocumentries(movies);
      })
      .catch(err => {
        setError(err);
      });
      
  }, []);

  return (
    <React.Fragment>
      {loaded &&!error&& (
        <ScrollView>
          <View style={sliderStyle}>
            <SliderBox
              images={movieImages}
              autoplay={true}
              circleLoop={true}
              dotStyle={sliderDots}
              sliderBoxHeight={dimensions.height / 1.5}
            />
            {error && <Text style={{color: 'red'}}>Error in server</Text>}
          </View>
          <View style={carousel}>
            <Text>
              <Component_list navigation = {navigation} title="Popular Movies:" content={popularMovies} />
            </Text>
          </View>
          <View style={carousel}>
            <Text>
              <Component_list navigation = {navigation} title="Top Rated:" content={popularTv} />
            </Text>
          </View>
          <View style={carousel}>
            <Text>
              <Component_list navigation = {navigation}
                title="Popular Family Movies:"
                content={familyMovies}
              />
            </Text>
          </View>
          <View style={carousel}>
            <Text>
              <Component_list navigation = {navigation} title="Documentries:" content={documentries} />
            </Text>
          </View>
        </ScrollView>
      )}
      {!loaded && <ActivityIndicator size={'large'} color={'purple'} />}
      {error && <Error/>}
        
    </React.Fragment>
  );
};
//TODO Dont want dots showing
const styles = StyleSheet.create({
  sliderStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
    paddingTop: 0.05,
  },
  sliderDots: {
    height: 0,
  },
  carousel: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 0.05,
  },
});
export default Home;
