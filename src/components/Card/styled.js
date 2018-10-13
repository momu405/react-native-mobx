import styled from 'styled-components/native';

export const Content = styled.View`
    border-width: 1;
    border-radius: 2;
    border-color: #ddd;
    border-bottom-width: 0;
    shadow-color: #000;
    shadow-offset: {width: 0, height: 2};
    shadow-opacity: 0.8;
    shadow-radius: 2;
    elevation: 1;
    flex: 1;
    flex-direction: column;
    margin: 10px;
`;

export const Text = styled.Text`
    padding: 16px;
    color: #000;
    font-weight: bold;
    font-size: 16px;
`;
