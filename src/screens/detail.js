import React,{ useEffect,useState } from 'react';
import {StyleSheet,Text,View,ScrollView,Image,Dimensions, ActivityIndicator} from 'react-native';
import dateFormat from 'dateformat';
import {getMovie} from '../api/api_list'
import PlayButton from '../components/playButton';
const placeholderImage = require('../assets/images/placeholder.png');
const height = Dimensions.get('screen').height
const Detail = ({route, navigation}) => {
    const movieId = route.params.movieDetail.id;
    const [movieDetails,setMovieDetails] = useState();
    const [loaded,setLoaded] = useState(false);
useEffect(()=>{
    getMovie(movieId).then(movieData =>{
        setMovieDetails(movieData);
        setLoaded(true)
       
    });

}, [movieId]); 
    return (
        <React.Fragment>
            {loaded &&(
            <ScrollView>
                <Image 
                    sizeMode="cover"
                    style={styles.imageStyle}
                    source={
                        movieDetails.poster_path
                            ? {uri: 'https://image.tmdb.org/t/p/w500' + movieDetails.poster_path}
                            :  placeholderImage
                    }
                />
                <View style = {styles.container}>
                    <View>
                        <PlayButton/>
                     
                    </View>
                    <Text style = {styles.movieText} >{movieDetails.title}</Text>
                    {movieDetails.genres && (<View style ={styles.genreContainer}>
                        {movieDetails.genres.map(genres => {
                            return(
                                <Text style = {styles.genresText} key ={genres.id}>{genres.name}</Text>
                            )
                        })}
                    </View>
                    )}
                    <Text style = {styles.dateText}>
                        {'Release Date:'+dateFormat(movieDetails.release_date,'mmmm dS, yyyy')}
                    </Text>
                    <Text style = {styles.overviewStyle}>
                        {movieDetails.overview}
                    </Text>
                </View>
            </ScrollView>
            )}
            {!loaded && <ActivityIndicator size = 'large' color='purple'/>}
            
        </React.Fragment>
    );
};

const styles = StyleSheet.create({
    container: {
      flex:1,
      position: 'relative',
      alignItems: 'center',
      height: 200,
    },
    imageStyle: {
      height: height/1.67,
      marginTop :5
      
    },
    movieText:{
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: 10,
        marginBottom: 10,

    },
    genreContainer:{
        flexDirection: 'row',
        alignItems:'center',
    },
    genresText: {
        marginRight:10,
        color:'purple',
        fontWeight:'bold'
    },
    dateText:{
        color:'green',
        fontWeight:'bold',
        marginRight: 10,


    },
    overviewStyle: {
        padding:15
    }
  });
  

export default Detail;