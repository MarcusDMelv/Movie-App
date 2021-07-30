import React, {PureComponent} from 'react';
import {Text, View, StyleSheet, Dimensions, FlatList} from 'react-native';
import Card from './card';
import PropTypes from 'prop-types';

const propTypes = {
  title: PropTypes.object,
  content: PropTypes.array,
};
class Component_list extends PureComponent {
  render() {
    const {textStyle, viewStyle} = styles;
    const {navigation,title, content} = this.props;
    return (
      <View style={viewStyle}>
        <View>
          <Text style={textStyle}>{title}</Text>
        </View>
        <View>
          <FlatList
            horizontal={true}
            data={content}
            renderItem={({item}) => <Card navigation = {navigation} item={item} />}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
    paddingBottom: 25,
  },
  viewStyle: {
    marginTop: 25,
  },
});
export default Component_list;
