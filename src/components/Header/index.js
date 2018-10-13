import React from 'react';
import {
  Container,
  BackButton,
  BackIcon,
} from './styled';

export default class Header extends React.Component {
    goBack = () => { this.props.navigation.openDrawer(); }
    render() {
        return (
            <Container>
                <BackButton onPress={this.goBack}>
                    <BackIcon />
                </BackButton>
            </Container>
        );
    }
}
