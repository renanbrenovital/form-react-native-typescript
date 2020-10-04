import styled, { css } from 'styled-components/native';

export const ButtonContainer = styled.TouchableOpacity`
  width: 100%;
  height: 60px;
  background: #000000;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
  border-radius: 5px;

  ${({ background }) => background && css`
    background: ${background};
  `}

  ${({ borderColor }) => borderColor && css`
    border: 1px solid ${borderColor};
  `}
`;

export const ButtonText = styled.Text`
  color: #ffffff;
  font-size: 16px;
  
  ${({ color }) => color && css`
    color: ${color};
  `}
`;
