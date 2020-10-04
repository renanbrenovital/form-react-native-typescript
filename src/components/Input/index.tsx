import React, { useState, useRef } from "react";
import { InputContainer, InputText } from './styles';
import { TextInputProps, View } from "react-native";
import { useTheme, HelperText } from "react-native-paper";

interface InputProps extends TextInputProps {
  label: string;
  iconType?: any;
  iconName?: string;
  mask?(text: string): React.SetStateAction<string>;
}

const Input: React.FC<InputProps> = ({ iconType: Icon, iconName, label, mask, ...rest }) => {
  const inputRef = useRef(null);
  const { colors } = useTheme();
  const [value, setValue] = useState('000.000.000-00');
  const [error, setError] = useState('CPF Inválido');
  
  function onChangeText(text: string) {
    if(mask) {
      const maskedText = mask(text);
      setValue(maskedText);
      return;
    }

    setValue(text);
  }

  function hasError() { return Boolean(error); }

  return (
    <View>
      <InputContainer>
        <InputText
          ref={inputRef}
          value={value}
          label={label}
          onChangeText={onChangeText}
          selectionColor={colors.primary}
          underlineColor={error ? colors.error : colors.primary}
          onBlur={() => setError('')}
          {...rest}
        />
        {Icon && 
          <Icon 
            size={22}
            name={iconName}
            color={colors.primary}
            style={{
              position: "absolute",
              right: 20,
              top: 22,
              opacity: 0.6,
            }}
          />}      
        {hasError() && 
          <HelperText type="error">
            {error}
          </HelperText>}
      </InputContainer>
    </View>
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