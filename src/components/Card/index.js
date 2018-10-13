import React from 'react';
import {
  Content,
  Text,
} from './styled';

export default class Card extends React.Component {
    render() {
        console.log(this.props)
        return (
            <Content>
                <Text>{this.props.topic}</Text>
                <Text>จำนวนเงิน: {this.props.money} บาท</Text>
            </Content>
        );
    }
}
