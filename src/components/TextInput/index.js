import React from 'react';
import {
  Container,
  Header,
  Text,
  Input,
} from './styled';

export default class TextInput extends React.Component {
    render() {
        return (
            <Container>
                <Header>
                    <Text>{this.props.title}</Text>
                </Header>
                <Input
                    onChangeText={this.props.onChangeText}
                    underlineColorAndroid="#eee"
                />
            </Container>
        );
    }
    
}
