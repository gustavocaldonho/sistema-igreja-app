export function checkText(text) {
  return text === "" ? true : false;
}

export function checkCpf(cpf) {
  return cpf.length !== 14 ? true : false;
}

export function checkEmail(email) {
  return !email.includes("@") || !email.includes(".com") ? true : false;
}

export function checkDataNasc(dataNasc) {
  return dataNasc.length !== 10 ? true : false;
}

export function formatDate(data) {
  const [day, month, year] = data.split("/");
  return `${year}-${month}-${day}`;
}

export function formatCpf(data) {
  return data.replace(/\D/g, "");
}
