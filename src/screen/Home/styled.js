import styled from 'styled-components/native';
import { Dimensions } from 'react-native';

export const Container = styled.View`
    flex: 1;
    flex-direction: column;
    background-color: #fff;
`;

export const Content = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
`;

export const Image = styled.Image`
    width: ${ props => (!!props.width ? props.width : parseInt(Dimensions.get('window').width, 10)) }
    height: ${ props => (!!props.height ? props.height : parseInt(Dimensions.get('window').height * 0.3, 10)) }
`;
