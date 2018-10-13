import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/SimpleLineIcons';
import { Platform } from 'react-native';

export const Container = styled.View`
  flex-direction: row;
  height: 80px;
  margin-top: ${Platform.OS == "ios" ? 20 : 0};
  background-color: #00A4FF;
`;

export const BackIcon = styled(Icon).attrs({ name: 'menu' })`
    color: white;
    font-size: 26;
`;

export const BackButton = styled.TouchableOpacity`
    margin-left: 20;
    justify-content: center;
`;
