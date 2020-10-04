import React from "react";
import { ButtonContainer, ButtonText } from './styles';
import { ButtonProps } from "react-native";

interface Props extends ButtonProps {
  color?: string;
  borderColor?: string;
  background?: string;
}

const Button: React.FC<Props> = ({ title, onPress, borderColor, color, background, ...rest }) => {
  return (
    <ButtonContainer
      background={background}
      borderColor={borderColor}
      onPress={onPress} 
      {...rest}
    >
      <ButtonText color={color}>{title}</ButtonText>
    </ButtonContainer>
  );
};

export default Button;