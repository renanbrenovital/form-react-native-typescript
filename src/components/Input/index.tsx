import React, { useState, useCallback } from "react";
import { Container, TextInput, TextError, IconContainer, IconError } from './styles';
import { TextInputProps } from "react-native";
import { useTheme } from "react-native-paper";

interface InputProps extends TextInputProps {
  label: string;
  icon?: any;
  error?: string;
  valid: boolean;
  mask?(text: string): React.SetStateAction<string>;
}
interface Icon {
  size?: number;
}

const Input: React.FC<InputProps> = ({ icon: IconDefault, label, mask, error, valid, ...rest }) => {
  const { colors } = useTheme();
  const [value, setValue] = useState('');
  
  function onChangeText(text: string) {
    const value = mask ? mask(text) : text;
    setValue(value);
  }

  const hasError = useCallback(() => Boolean(error), [error]);
  const isValid = useCallback(() => Boolean(valid), [valid]);
  
  const Icon = ({ size = 22 }: Icon) => (
    <IconContainer>
      {hasError() 
        ? <IconError size={size} color={colors.error} /> 
        : <IconDefault size={size} color={isValid() ? 'green': colors.primary} />
      }
    </IconContainer>
  );
    
  const underlineColor = hasError() ? colors.error : 'transparent';

  return (
      <Container>
        <TextInput 
          value={value}
          label={label}
          onChangeText={onChangeText}
          underlineColor={underlineColor}
          {...rest}
        />
        <Icon />
        <TextError>{error}</TextError>
      </Container>
  );
};

export default Input;


{/* <Input
        label='Nome Completo'
        iconType={AntDesign}
        iconName='user'
        maxLength={60}
      />

      <Input
        label='E-mail'
        iconType={AntDesign}
        iconName='mail'
        maxLength={320}
        keyboardType="email-address"
      />
    
      <Input
        label='Telefone'
        iconType={AntDesign}
        iconName='phone'
        mask={phone}
        maxLength={15}
        keyboardType="numeric"
      />

      <Input
        label='Senha'
        iconType={AntDesign}
        iconName='lock1'
        maxLength={128}
        secureTextEntry={true}
      /> 

      <Input
        label='Confirmar senha'
        iconType={AntDesign}
        iconName='lock1'
        maxLength={128}
        secureTextEntry={true}
      />     

      <Input
        label='Valor'
        iconType={MaterialCommunityIcons}
        iconName='currency-usd'
        mask={currency}
        keyboardType="numeric"
      />

      <Input
        label='CEP'
        iconType={AntDesign}
        iconName='home'
        mask={cep}
        maxLength={9}
        keyboardType="numeric"
      />
      
      <Input
        label='Data de nascimento'
        iconType={AntDesign}
        iconName='calendar'
        mask={birthday}
        maxLength={10}
        keyboardType="numeric"
      />  */}