import React from 'react';
// import { Container } from 'native-base';
import { DrawerItems } from 'react-navigation';

import {
    HeaderDrawer,
    Container,
    Image,
} from './styled';

const CustomDrawerContentComponent = (props) => {
  return (
    <Container>
      <HeaderDrawer>
        <Image
            source={require('../asset/images/logo.png')}
            width="50px"
            height="50px"
        />
      </HeaderDrawer>
      <DrawerItems {...props} />
    </Container>
  );
};

export default CustomDrawerContentComponent;
