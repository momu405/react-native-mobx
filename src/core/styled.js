import { Dimensions } from 'react-native';
import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/SimpleLineIcons';

export const HeaderDrawer = styled.View`
  height: ${ parseInt(Dimensions.get('window').height * 0.2, 10) }
  background-color: hsl(60, 80%, 80%);
`;

export const Container = styled.View`
    flex: 1;
    background-color: #fff;
`;

export const Image = styled.Image`
    width: ${ props => (!!props.width ? props.width : parseInt(Dimensions.get('window').width, 10)) }
    height: ${ props => (!!props.height ? props.height : parseInt(Dimensions.get('window').height * 0.3, 10)) }
`;
