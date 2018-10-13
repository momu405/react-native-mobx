import React from 'react';
import {
  TouchableOpacity,
  Text,
} from './styled';

export default class Button extends React.Component {
    render() {
        console.log(this.props)
        return (
            <TouchableOpacity onPress={this.props.onPress}>
                <Text>{this.props.text ? this.props.text: 'Hello' }</Text>
            </TouchableOpacity>
        );
    }
}
