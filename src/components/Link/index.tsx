import React from "react";
import { LinkContainer, LinkText } from './styles';
import { ButtonProps } from 'react-native';

interface Props extends ButtonProps {
  color?: string;
  fontSize?: string;
  width?: string;
  icon?: any;
  iconSize?: number;
  iconLeft?: boolean;
}

const Link: React.FC<Props> = ({ title, icon: Icon, iconSize, color, fontSize, ...rest }) => {
  return (
    <LinkContainer {...rest}>
      <LinkText color={color} fontSize={fontSize}>{title}</LinkText>
      {Icon && <Icon size={iconSize} color={color} />} 
    </LinkContainer>
  );
};

export default Link;