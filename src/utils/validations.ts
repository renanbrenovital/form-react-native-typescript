import * as yup from 'yup';

interface ValidateDataProps {
  data: object;
  schema: yup.ObjectSchema;
  abortEarly?: boolean;
}

interface Errors {
  [key: string]: string | boolean;
}

export const yupCPF = yup.string().required('CPF é obrigatório');
export const yupFullName = yup.string().required('Nome é obrigatório');
export const yupPhone = yup.string().required('Telefone é obrigatório');
export const yupEmail = yup.string().required('E-mail é obrigatório').email('E-mail inválido');
export const yupPassword = yup.string().required('Senha é obrigatória').min(8, 'No mínimo 8 dígitos');
export const schemaPasswordConfirmation = yup.string().oneOf([yup.ref('password'), ''], 'Senhas devem ser iguais');

function YupErrors(yupErrors: yup.ValidationError) {
  const errors: Errors = {};
  yupErrors.inner.forEach((error) => errors[error.path] = error.message);
  return { errors };
}
  
export async function validateData({ data, schema, abortEarly = false }: ValidateDataProps) {
  return schema
    .validate(data, { abortEarly })
    .catch((errors: yup.ValidationError) => YupErrors(errors));
}