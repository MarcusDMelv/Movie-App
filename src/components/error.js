import React, {PureComponent} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import PropTypes from 'prop-types';

const propTypes = {
  errorText1: PropTypes.string,
  errorText2: PropTypes.string,
}
const defaultProps ={
  errorText1: ' Oops! Something went wrong.',
  errorText2: 'Make sure you are online and restart the Application'
}
class Error extends PureComponent {
  render() {
    const {errorText1,errorText2} = this.props;
    return (
      <View>
        <Text>{errorText1}</Text>
        <Text>{errorText2}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    justifyContent:'center',
    alignItems: 'center',
  },
  textStyle : {
    fontWeight:'bold',

  }

});
Error.propTypes = propTypes
Error.defaultProps =defaultProps
export default Error;
