import * as yup from 'yup';

type Error = {
  [key: string]: string;
}

type YupErrors = {
  inner: Array<Error>;
}

type Step1 = {
	document: string;
  full_name: string;
}

type Validate = {
  data: object;
  schema: yup.ObjectSchema;
  abortEarly?: boolean;
}

type CPF = {
  document: string;
}

type FullName = {
  full_name: string;
}

type Email = {
  email: string;
}

const schemaSinUpStep1: yup.ObjectSchema<Step1> = yup.object({
  document: yup.string().required('CPF é obrigatório').defined(),
  full_name: yup.string().required('Nome é obrigatório').defined(),
}).defined();

const schemaCPF: yup.ObjectSchema = yup.object({
  document: yup.string().required('CPF é obrigatório').defined(),
}).defined();  

const schemaFullName: yup.ObjectSchema = yup.object({
  full_name: yup.string().required('Nome é obrigatório').defined(),
}).defined();  

const schemaEmail: yup.ObjectSchema = yup.object({
  email: yup.string().required('E-mail é obrigatório').email('E-mail inválido').defined(),
}).defined();

function organizeYupErrors(yupErrors: YupErrors) {
  const errors: Error = {};
  yupErrors.inner.forEach((error) => {
    const { path, message } = error;
    errors[`${path}_error`] = message;
  });
  return errors;
}
  
async function validate({ data, schema, abortEarly = false }: Validate) {
  return schema
    .validate(data, { abortEarly })
    .catch((yupErrors: YupErrors) => {
      const errors = organizeYupErrors(yupErrors);
      return errors;
    });
}

export function validateStep1(data: Step1) {
  return validate({ data, schema: schemaSinUpStep1 });
}

export function validateCPF(data: CPF) {
  return validate({ data, schema: schemaCPF });
}

export function validateFullName(data: FullName) {
  return validate({ data, schema: schemaFullName });
}

export function validateEmail(data: Email) {
  return validate({ data, schema: schemaEmail });
}