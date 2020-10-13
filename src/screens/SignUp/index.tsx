import React, { useState, useCallback } from "react";
import { Container, Form, IconDocument, IconPerson, IconSignIn } from "./styles";
import { validateData, yupCPF, yupFullName } from "../../utils/validations";
import { maskCPF } from "../../utils/masks";
import { useTheme } from 'react-native-paper';
import Input from "../../components/Input";
import Button from "../../components/Button";
import Link from "../../components/Link";
import * as yup from 'yup';

interface ValidateDataProps {
  data: object;
  schema: yup.ObjectSchema;
  abortEarly?: boolean;
}
interface Error {
  [key: string]: string;
}

interface Valid {
  [key: string]: boolean;
}

export default function SignUp() {
  const { colors } = useTheme();
  const [formError, setFormError] = useState({} as Error);
  const [formValid, setFormValid] = useState({} as Valid);

  function navigateToSignInScreen() {
    console.log('acessar minha conta');
  }

  const validate = useCallback(async ({data, schema}: ValidateDataProps) => {
    const { errors } = await validateData({data, schema});
    if(errors) {
      setFormError((prevErrors) => ({...prevErrors, ...errors}));
      return false;
    }
    return true;
  }, [setFormError, setFormValid]);
  
  const handleSubmit = useCallback(async () => {
    setFormError({});
    const formIsValid = await validate({
      data: {
        document: "", 
        full_name: ""
      }, 
      schema: yup.object({
        document: yupCPF,
        full_name: yupFullName
      })
    });
    formIsValid && console.log('submeter formulário', formValid);
  }, []);

  const validateDocument = useCallback(async () => {
    const isValidDocument = await validate({
      data: {
        document: "01718985169", 
      }, 
      schema: yup.object({
        document: yupCPF
      })
    })
    setFormValid((prevValid) => ({...prevValid, document: isValidDocument}));
  }, []);

  const validateFullName = useCallback(async () => {
   const isValidFullName = await validate({
      data: {
        full_name: "", 
      }, 
      schema: yup.object({
        full_name: yupFullName
      })
    })
    setFormValid((prevValid) => ({...prevValid, document: isValidFullName}));
  }, []);

  const resetDocument = useCallback(() => {
    setFormError((prevErrors) => ({...prevErrors, document: ''}));
    setFormValid((prevValid) => ({...prevValid, document: false }));
  }, []);

  const resetFullName = useCallback(() => {
    setFormError((prevErrors) => ({...prevErrors, full_name: ''}));
    setFormValid((prevValid) => ({...prevValid, full_name: false }));
  }, []);

  return (
    <Container>
      <Form>
        <Input
          label='Digite seu CPF'
          icon={IconDocument}
          mask={maskCPF}
          maxLength={14}
          keyboardType="numeric"
          error={formError['document']}
          valid={formValid['document']}
          onFocus={resetDocument}
          onBlur={validateDocument}
        />
        <Input
          label='Digite o Nome Completo'
          icon={IconPerson}
          error={formError['full_name']}
          valid={formValid['full_name']}
          onFocus={resetFullName}
          onBlur={validateFullName}
        />
        <Button
          title="Continuar"
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