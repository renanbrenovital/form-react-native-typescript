import React, { useState, useCallback } from "react";
import { Container, Form, IconDocument, IconPerson, IconEmail, IconSignIn } from "./styles";
import { validateFullName, validateCPF, validateEmail, validateStep1 } from "../../utils/validations";
import { maskCPF } from "../../utils/masks";
import { useTheme } from 'react-native-paper';
import Input from "../../components/Input";
import Button from "../../components/Button";
import Link from "../../components/Link";

type Error = {
  [key: string]: string;
}

export default function SignUp() {
  const { colors } = useTheme();
  const [errors, setErrors] = useState({} as Error);

  function navigateToSignInScreen() {
    console.log('acessar minha conta');
  }

  const saveError = useCallback((error) => {
    setErrors((prevErrors) => ({ ...prevErrors, ...error }));
  }, []);

  async function handleSubmit() {
    const document = "01718985169";
    const full_name = "Renan Breno Vital";
    const errorSubmit = await validateStep1({document, full_name});
    errorSubmit ? saveError(errorSubmit) : saveError({});
  }

  async function handleCPF() {
    const data = { document: '54654' };
    const validate = await validateCPF(data);
    const document_error = validate['document_error'];
    saveError({ document_error });
  }

  async function handleFullName() {
    const data = { full_name: '' };
    const validate = await validateFullName(data);
    const full_name_error = validate['full_name_error'];
    saveError({ full_name_error });
  }

  async function handleEmail() {
    const data = { email: '' };
    const validate = await validateEmail(data);
    const email_error = validate['email_error'];
    saveError({ email_error });
  }

  return (
    <Container>
      <Form>
        <Input
          label='Digite seu CPF'
          icon={IconDocument}
          mask={maskCPF}
          maxLength={14}
          keyboardType="numeric"
          error={errors['document_error']}
          onBlur={handleCPF}
        />
        <Input
          label='Digite seu Nome Completo'
          icon={IconPerson}
          error={errors['full_name']}
          onBlur={handleFullName}
        />
        <Input
          label='Digite seu E-mail'
          icon={IconEmail}
          error={errors['email']}
          onBlur={handleEmail}
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