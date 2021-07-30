import React, { PureComponent } from 'react';
import {Pressable,Text} from 'react-native';

class PlayButton extends PureComponent{
    render(){
        return (
            <Pressable>
                <Text>
                    Play A Preview
                </Text>
            

            </Pressable>

        );
    }
}

export default PlayButton;