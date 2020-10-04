import React from "react";
import { Container, Form } from "./styles";
import { cpf } from "../../utils/masks";
import { AntDesign, MaterialCommunityIcons} from '../../utils/icons';
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
          label='CPF'
          iconType={AntDesign}
          iconName='Safety'
          mask={cpf}
          maxLength={14}
          keyboardType="numeric"        
        />

        {/* <Input
          label='Senha'
          iconType={AntDesign}
          iconName='lock1'
          maxLength={128}
          secureTextEntry={true}
        /> */}

        <Button
          title="Entrar"
          onPress={handleSubmit} 
          background={colors.secondary}
        />

        <Link 
          title="Esqueceu a senha?"
          onPress={navigateToForgotPasswordScreen}
          color={colors.light}
          fontSize="12px"
        />
      </Form>
      
      <Link 
        title="Criar uma conta"
        onPress={navigateToSignUpScreen} 
        color={colors.light}
        width="160px"
        iconType={MaterialCommunityIcons}
        iconName='account-plus'
        iconSize={22}
      />
    </Container>
  );
}