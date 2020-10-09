import React from "react";
import { Container, Form, IconDocument, IconPerson, IconEmail, IconSignIn } from "./styles";
import { cpfMask } from "../../utils/masks";
import { useTheme } from 'react-native-paper';
import Input from "../../components/Input";
import Button from "../../components/Button";
import Link from "../../components/Link";

export default function SignUp() {
  const { colors } = useTheme();

  function handleSubmit() {
    console.log('criar conta');
  }  

  function navigateToSignInScreen() {
    console.log('acessar minha conta');
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
          error=""
        />
        <Input
          label='Digite seu Nome Completo'
          icon={IconPerson}
          error=""
        />
        <Input
          label='Digite seu Email'
          icon={IconEmail}
          secureTextEntry={true}
          error=""
        />
        <Button
          title="Cadastrar"
          onPress={handleSubmit} 
          background={colors.secondary}
        />
      </Form>      
      <Link 
        title="Acessar minha conta"
        width="170px"
        fontSize="14px"
        color={colors.light}
        icon={IconSignIn}
        iconSize={20}
        iconLeft={true}
        onPress={navigateToSignInScreen} 
      />
    </Container>
  );
}