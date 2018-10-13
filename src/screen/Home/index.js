import React from 'react';
import { ListView } from 'react-native';
import {
  observer,
  inject,
} from 'mobx-react/native';

import {
  Container,
  Content,
  Image,
} from './styled';

import {
  Header,
} from '../../components';

@inject('listStore')
@observer
class Home extends React.Component {
  render() {
    return (
      <Container>
        <Header navigation={this.props.navigation} />
        <Content>
            <Image
                source={ require('../../asset/images/logo.png')}
            />
        </Content>
        
      </Container>
    );
  }
}

export default Home;
