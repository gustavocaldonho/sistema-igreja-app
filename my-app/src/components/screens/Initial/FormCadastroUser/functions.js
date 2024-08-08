export function checkText(text) {
  return text === "" ? true : false;
}

export function checkCpf(cpf) {
  return desformatCpf(cpf).length !== 11 ? true : false;
}

export function checkEmail(email) {
  return !email.includes("@") || !email.includes(".com") ? true : false;
}

export function checkDataNasc(dataNasc) {
  return dataNasc.length !== 10 ? true : false;
}

export function formatDateBR(data) {
  const [year, month, day] = data.split("-");
  return `${day}/${month}/${year}`;
}

export function formatDateUSA(data) {
  const [day, month, year] = data.split("/");
  return `${year}-${month}-${day}`;
}

export function formatCpf(data) {
  const badchars = /[^\d]/g;
  const mask = /(\d{3})(\d{3})(\d{3})(\d{2})/;
  const cpf = new String(data).replace(badchars, "");
  return cpf.replace(mask, "$1.$2.$3-$4");
}

export function desformatCpf(data) {
  return data.replace(/\D/g, "");
}
