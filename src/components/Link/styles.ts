import styled, { css } from 'styled-components/native';
import { TextProps } from 'react-native';

interface ILinkContainerProps {
  width?: string;
  iconLeft?: string;
}
interface LinkTextProps extends TextProps {
  color?: string;
  fontSize?: string;
}

export const LinkContainer = styled.TouchableOpacity<ILinkContainerProps>`
  width: 100%;
  height: 30px;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  margin: 0 auto;

  ${({ width }) => width && css`
    width: ${width};
    justify-content: space-between;
  `}

  ${({ iconLeft }) => iconLeft && css`
    flex-direction: row-reverse;
  `}
`;

export const LinkText = styled.Text<LinkTextProps>`
  color: #000;
  font-size: 16px;
  
  ${({ color }) => color && css`
    color: ${color};
  `}
  
  ${({ fontSize }) => fontSize && css`
    font-size: ${fontSize};
  `}
`;
