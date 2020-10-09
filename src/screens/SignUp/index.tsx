import React, { useState } from "react";
import { Container, Form, IconDocument, IconPerson, IconEmail, IconSignIn } from "./styles";
import { cpfMask } from "../../utils/masks";
import { useTheme } from 'react-native-paper';
import Input from "../../components/Input";
import Button from "../../components/Button";
import Link from "../../components/Link";
import * as yup from 'yup';
interface Person {
	document: string;
  full_name: string;
  email: string;
}

type Error = {
  [key: string]: string;
}

type YupErrors = {
  inner: Array<Error>;
}

export default function SignUp() {
  const { colors } = useTheme();
  const [errors, setErros] = useState({} as Error);

  const personSchema: yup.ObjectSchema<Person> = yup.object({
    document: yup.string().required('CPF é obrigatório').defined(),
    full_name: yup.string().required('Nome é obrigatório').defined(),
    email: yup.string().email('E-mail inválido').required('E-mail é obrigatório').defined(),
  }).defined();

  const fullNameSchema: yup.ObjectSchema = yup.object({
    full_name: yup.string().required('Nome é obrigatório').defined(),
  }).defined();

  function organizeYupErrors(yupErrors: YupErrors) {
    const errors: Error = {};
    yupErrors.inner.forEach((error) => {
      const { path, message } = error;
      errors[path] = message;
    });    
    return errors;
  }

  async function handleSubmit() {
    const personData = {
      document: "01718985169",
      full_name: "adfasdf",
      email: "renan@gmail.com"
    }
    
    const yupOptions = {
      abortEarly: false,
    }
    
    return personSchema
      .validate(personData, yupOptions)
      .then(data => {
        setErros({});
      })
      .catch(yupErrors => {
        const errors = organizeYupErrors(yupErrors);
        setErros(errors);
      });
  }  
  
  async function name() {
    const personData = {
      full_name: "aaa",
    }
    
    const yupOptions = {
      abortEarly: true,
    }
    
    return fullNameSchema
      .validate(personData, yupOptions)
      .then(data => {
        setErros({});
      })
      .catch(yupErrors => {
        setErros({ 'full_name': yupErrors.errors[0]});
      });
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
          error={errors['document']}
          mask={cpfMask}
          maxLength={14}
          keyboardType="numeric"
        />
        <Input
          label='Digite seu Nome Completo'
          icon={IconPerson}
          error={errors['full_name']}
          onBlur={name}
        />
        <Input
          label='Digite seu E-mail'
          icon={IconEmail}
          error={errors['email']}
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