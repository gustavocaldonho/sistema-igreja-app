export function getMonth(data) {
  return data.slice(5, 7);
}

export function getYear(data) {
  return data.slice(0, 4);
}

export function getExpiresDate(data) {
  const year = data.slice(0, 4);
  const month = data.slice(5, 7);
  const day = data.slice(8, 10);
  return `${day}/${month}/${year}`;
}

export function getStatus(data) {
  switch (data) {
    case "ACTIVE":
      return "PENDENTE";
    case "EXPIRED":
      return "NÃO PAGO";
    case "PAID":
      return "PAGO";
    default:
      return "STATUS";
  }
}
