function cep(value: string) {
  return value
    .replace(/\D/g, '') 
    .replace(/(\d{5})(\d)/, '$1-$2')
    .replace(/(-\d{3})\d+?$/, '$1');
}

function phone(value: string) {
  return value
    .replace(/\D/g, '') 
    .replace(/(\d{2})(\d)/, '($1) $2')
    .replace(/(\d{5})(\d)/, '$1-$2')
    .replace(/(-\d{4})\d+?$/, '$1');
}

function currency(value: string) {
  return value
    .replace(/\D/g, "")
    .replace(/(\d)(\d{2})$/, "$1,$2")
    .replace(/(?=(\d{3})+(\D))\B/g, ".");
}

function birthday(value: string) {
  return value
    .replace(/\D/g, '') 
    .replace(/(\d{2})(\d)/, '$1/$2')
    .replace(/(\d{2})(\d)/, '$1/$2')
    .replace(/(\/\d{4})\d+?$/, '$1');
}

function cpf (value: string) {
  return value
    .replace(/\D/g, '') 
    .replace(/(\d{3})(\d)/, '$1.$2')
    .replace(/(\d{3})(\d)/, '$1.$2')
    .replace(/(\d{3})(\d{1,2})/, '$1-$2')
    .replace(/(-\d{2})\d+?$/, '$1');
}

export { cep, phone, currency, birthday, cpf };
