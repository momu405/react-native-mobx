import styled from 'styled-components/native';

export const TouchableOpacity = styled.TouchableOpacity``;

export const Text = styled.Text`
    background-color: ${ props => ( !!props.bg ? props.bg : '#00A4FF' ) }
    margin: 10px;
    border-radius: 5px;
    padding: 16px;
    text-align: center;
    color: #fff;
    font-weight: bold;
    font-size: 16px;
`;
