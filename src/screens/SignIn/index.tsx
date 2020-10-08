import React from "react";
import { Container, Form, IconDocument, IconPassword, IconError, IconCreateAccount } from "./styles";
import { cpfMask } from "../../utils/masks";
import { useTheme } from 'react-native-paper';
import Input from "../../components/Input";
import Button from "../../components/Button";
import Link from "../../components/Link";

export default function SignIn() {
  const { colors } = useTheme();

  function handleSubmit() {
    console.log('acessar conta');
  }  
  
  function navigateToForgotPasswordScreen() {
    console.log('recuperar senha');
  }

  function navigateToSignUpScreen() {
    console.log('criar conta');
  }

  return (
    <Container>
      <Form>
        <Input
          label='Digite seu CPF'
          icon={IconDocument}
          mask={cpfMask}
          maxLength={14}
          keyboardType="numeric"
          error="CPF é obrigatório"
        />
        <Input
          label='Digite sua Senha'
          icon={IconPassword}
          maxLength={128}
          secureTextEntry={true}
          error=""
        />
        <Button
          title="Entrar"
          onPress={handleSubmit} 
          background={colors.secondary}
        />
        <Link 
          title="Esqueceu a senha?"
          fontSize="12px"
          color={colors.light}
          onPress={navigateToForgotPasswordScreen}
        />
      </Form>      
      <Link 
        title="Criar uma conta"
        width="140px"
        fontSize="14px"
        color={colors.light}
        icon={IconCreateAccount}
        iconSize={20}
        onPress={navigateToSignUpScreen} 
      />
    </Container>
  );
}