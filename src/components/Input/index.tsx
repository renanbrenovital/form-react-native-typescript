import React, { useState, useCallback } from "react";
import { InputContainer, InputText, IconContainer, IconError } from './styles';
import { TextInputProps } from "react-native";
import { useTheme, HelperText as InputError } from "react-native-paper";

interface InputProps extends TextInputProps {
  label: string;
  icon?: any;
  error?: string;
  mask?(text: string): React.SetStateAction<string>;
}

interface Icon {
  size: number;
}

const Input: React.FC<InputProps> = ({ icon: IconDefault, label, mask, error, ...rest }) => {
  const { colors } = useTheme();
  const [value, setValue] = useState('');
  
  function onChangeText(text: string) {
    if(mask) {
      const maskedText = mask(text);
      setValue(maskedText);
      return;
    }
    setValue(text);
  }

  const hasError = useCallback(() => Boolean(error), [error]);
  
  const InputIcon = ({ size }: Icon) => (
    <IconContainer>
      {hasError() 
        ? <IconError size={size} color={colors.error} /> 
        : <IconDefault size={size} color={colors.primary} /> 
      }
    </IconContainer>
  );
    
  const Color = hasError() ? colors.error : colors.primary;

  return (
    <InputContainer>
      <InputText
        value={value}
        label={label}
        onChangeText={onChangeText}
        selectionColor={Color}
        underlineColor={Color}
        {...rest}
      />
      <InputIcon size={22} />
      <InputError type="error">{error}</InputError>
    </InputContainer>
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